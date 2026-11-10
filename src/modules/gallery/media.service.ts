import {
  Injectable,
  Logger,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import * as ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import { MediaType } from '../../generated/prisma';
import {
  ALLOWED_IMAGE_MIME_TYPES,
  ALLOWED_VIDEO_MIME_TYPES,
  DEFAULT_EXTERNAL_STORAGE_PATH,
  DEFAULT_MEDIA_URL_PREFIX,
  MAX_IMAGE_FILE_SIZE,
  MAX_VIDEO_FILE_SIZE,
} from './gallery.constants';

export interface ProcessedMediaResult {
  filename: string;
  mediaUrl: string;
  mediaType: MediaType;
  originalName: string;
  mimeType: string;
  size: number;
}

@Injectable()
export class MediaService {
  private readonly logger = new Logger(MediaService.name);
  private readonly uploadDir: string;
  private readonly tempDir: string;

  constructor(private readonly configService: ConfigService) {
    const rawExternalPath =
      this.configService.get<string>('EXTERNAL_STORAGE_PATH') || DEFAULT_EXTERNAL_STORAGE_PATH;
    
    // Resolve absolute path anywhere on the system (e.g. /var/www/uploads or D:/uploads)
    this.uploadDir = path.resolve(rawExternalPath);
    this.tempDir = path.join(this.uploadDir, 'temp');

    this.initDirectories();
    this.initFfmpeg();

    this.logger.log(`MediaService configured. External Storage Directory: ${this.uploadDir}`);
  }

  /**
   * Ensure external storage and temp directories exist on the host filesystem
   */
  private initDirectories(): void {
    try {
      if (!fs.existsSync(this.uploadDir)) {
        fs.mkdirSync(this.uploadDir, { recursive: true });
        this.logger.log(`Created external storage directory: ${this.uploadDir}`);
      }
      if (!fs.existsSync(this.tempDir)) {
        fs.mkdirSync(this.tempDir, { recursive: true });
        this.logger.log(`Created external temp directory: ${this.tempDir}`);
      }
    } catch (error: unknown) {
      const err = error as Error;
      this.logger.error(`Failed to create external storage directory: ${err.message}`, err.stack);
    }
  }

  /**
   * Get the configured external storage directory path
   */
  public getUploadDir(): string {
    return this.uploadDir;
  }

  /**
   * Configure ffmpeg binary location
   */
  private initFfmpeg(): void {
    const customFfmpegPath = this.configService.get<string>('FFMPEG_PATH');
    if (customFfmpegPath && fs.existsSync(customFfmpegPath)) {
      ffmpeg.setFfmpegPath(customFfmpegPath);
      this.logger.log(`Using custom ffmpeg binary at: ${customFfmpegPath}`);
    } else if (ffmpegInstaller && ffmpegInstaller.path) {
      ffmpeg.setFfmpegPath(ffmpegInstaller.path);
      this.logger.log(`Using installed ffmpeg binary at: ${ffmpegInstaller.path}`);
    } else {
      this.logger.warn('No custom ffmpeg path found; relying on system PATH');
    }
  }

  /**
   * Detect and validate media type from MIME type
   */
  public detectMediaType(mimeType: string): MediaType {
    if (!mimeType) {
      throw new BadRequestException('MIME type could not be determined');
    }

    const lowerMime = mimeType.toLowerCase();

    if (ALLOWED_IMAGE_MIME_TYPES.includes(lowerMime) || lowerMime.startsWith('image/')) {
      return MediaType.IMAGE;
    }

    if (ALLOWED_VIDEO_MIME_TYPES.includes(lowerMime) || lowerMime.startsWith('video/')) {
      return MediaType.VIDEO;
    }

    throw new BadRequestException(
      `Unsupported file type: "${mimeType}". Allowed types: JPEG, PNG, WEBP, GIF, SVG, MP4, WEBM, MOV, MKV, AVI.`,
    );
  }

  /**
   * Validate file size according to media type
   */
  public validateFileSize(fileSize: number, mediaType: MediaType): void {
    if (mediaType === MediaType.IMAGE && fileSize > MAX_IMAGE_FILE_SIZE) {
      throw new BadRequestException(
        `Image file size exceeds maximum limit of ${MAX_IMAGE_FILE_SIZE / (1024 * 1024)}MB`,
      );
    }

    if (mediaType === MediaType.VIDEO && fileSize > MAX_VIDEO_FILE_SIZE) {
      throw new BadRequestException(
        `Video file size exceeds maximum limit of ${MAX_VIDEO_FILE_SIZE / (1024 * 1024)}MB`,
      );
    }
  }

  /**
   * Process and convert uploaded media file (Image to WebP, Video to WebM) and store in external directory
   */
  public async processAndSave(file: Express.Multer.File): Promise<ProcessedMediaResult> {
    if (!file || !file.buffer) {
      throw new BadRequestException('No valid media file provided');
    }

    this.initDirectories();

    const mediaType = this.detectMediaType(file.mimetype);
    this.validateFileSize(file.size, mediaType);

    const uniqueId: string = uuidv4();

    if (mediaType === MediaType.IMAGE) {
      return this.convertImageToWebp(file, uniqueId);
    } else {
      return this.convertVideoToWebm(file, uniqueId);
    }
  }

  /**
   * Compress and convert Image to WebP using Sharp and save to EXTERNAL storage
   */
  private async convertImageToWebp(
    file: Express.Multer.File,
    uniqueId: string,
  ): Promise<ProcessedMediaResult> {
    const filename = `${uniqueId}.webp`;
    const outputPath = path.join(this.uploadDir, filename);

    try {
      const info = await sharp(file.buffer)
        .rotate() // Automatically orient based on EXIF metadata
        .webp({
          quality: 80,
          effort: 4,
          lossless: false,
        })
        .toFile(outputPath);

      const mediaUrl = this.formatMediaUrl(filename);

      this.logger.log(`Image converted to WebP in external directory: ${outputPath} (${info.size} bytes)`);

      return {
        filename,
        mediaUrl,
        mediaType: MediaType.IMAGE,
        originalName: file.originalname,
        mimeType: 'image/webp',
        size: info.size,
      };
    } catch (error: unknown) {
      const err = error as Error;
      this.logger.error(`Sharp image conversion failed: ${err.message}`, err.stack);
      await this.safeUnlink(outputPath);
      throw new InternalServerErrorException(`Image conversion failed: ${err.message}`);
    }
  }

  /**
   * Convert Video to WebM using fluent-ffmpeg and save to EXTERNAL storage
   */
  private async convertVideoToWebm(
    file: Express.Multer.File,
    uniqueId: string,
  ): Promise<ProcessedMediaResult> {
    const outputFilename = `${uniqueId}.webm`;
    const outputPath = path.join(this.uploadDir, outputFilename);

    // Save temporary input file in external temp directory
    const tempInputExt = path.extname(file.originalname) || '.tmp';
    const tempInputFilename = `temp_${uniqueId}${tempInputExt}`;
    const tempInputPath = path.join(this.tempDir, tempInputFilename);

    try {
      await fs.promises.writeFile(tempInputPath, file.buffer);

      await new Promise<void>((resolve, reject) => {
        ffmpeg(tempInputPath)
          .output(outputPath)
          .format('webm')
          .videoCodec('libvpx-vp9')
          .audioCodec('libopus')
          .outputOptions([
            '-crf 32',
            '-b:v 0',
            '-deadline realtime',
            '-cpu-used 4',
          ])
          .on('start', (commandLine: string) => {
            this.logger.debug(`Spawned FFmpeg with command: ${commandLine}`);
          })
          .on('error', (err: Error, stdout: string, stderr: string) => {
            this.logger.error(`FFmpeg conversion error: ${err.message}`, stderr);
            reject(err);
          })
          .on('end', () => {
            this.logger.log(`FFmpeg conversion completed in external storage: ${outputPath}`);
            resolve();
          })
          .run();
      });

      const stats = await fs.promises.stat(outputPath);
      const mediaUrl = this.formatMediaUrl(outputFilename);

      return {
        filename: outputFilename,
        mediaUrl,
        mediaType: MediaType.VIDEO,
        originalName: file.originalname,
        mimeType: 'video/webm',
        size: stats.size,
      };
    } catch (error: unknown) {
      const err = error as Error;
      this.logger.error(`Video conversion failed: ${err.message}`, err.stack);
      await this.safeUnlink(outputPath);
      throw new InternalServerErrorException(`Video conversion failed: ${err.message}`);
    } finally {
      // Always cleanup temp input file
      await this.safeUnlink(tempInputPath);
    }
  }

  /**
   * Format the final public accessible web URL for the media item (e.g., /api/media/filename.webp)
   */
  public formatMediaUrl(filename: string): string {
    const prefix = this.configService.get<string>('MEDIA_URL_PREFIX') || DEFAULT_MEDIA_URL_PREFIX;
    const cleanPrefix = prefix.startsWith('/') ? prefix : `/${prefix}`;
    const baseUrl = this.configService.get<string>('BASE_URL') || '';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

    return `${cleanBase}${cleanPrefix}/${filename}`;
  }

  /**
   * Delete media file from external storage directory by its URL or filename
   */
  public async deleteFileByUrl(mediaUrl: string): Promise<void> {
    if (!mediaUrl) return;

    try {
      const filename = path.basename(mediaUrl);
      const filePath = path.join(this.uploadDir, filename);
      await this.safeUnlink(filePath);
      this.logger.log(`Deleted media file from external storage: ${filePath}`);
    } catch (error: unknown) {
      const err = error as Error;
      this.logger.warn(`Failed to delete media file for URL ${mediaUrl}: ${err.message}`);
    }
  }

  /**
   * Helper to safely remove a file without throwing if it doesn't exist
   */
  private async safeUnlink(filePath: string): Promise<void> {
    try {
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
      }
    } catch (err: unknown) {
      const error = err as Error;
      this.logger.warn(`Could not unlink file ${filePath}: ${error.message}`);
    }
  }
}
