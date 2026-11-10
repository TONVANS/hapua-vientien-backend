import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MediaService } from './media.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { UploadGalleryDto } from './dto/upload-gallery.dto';
import { Visibility, Gallery } from '../../generated/prisma';

@Injectable()
export class GalleryService {
  private readonly logger = new Logger(GalleryService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mediaService: MediaService,
  ) {}

  /**
   * Upload, convert media (Image to WebP / Video to WebM), and create Gallery database record
   */
  async uploadAndCreate(
    file: Express.Multer.File,
    dto: UploadGalleryDto,
  ): Promise<Gallery> {
    if (!file) {
      throw new BadRequestException('Media file is required under the "file" field');
    }

    // 1. Verify that the referenced activity exists
    const activity = await this.prisma.activity.findUnique({
      where: { id: dto.activityId },
    });

    if (!activity) {
      throw new NotFoundException(`Activity with ID "${dto.activityId}" not found`);
    }

    // 2. Process and convert media file to WebP / WebM
    const processedMedia = await this.mediaService.processAndSave(file);

    // 3. Persist record in Prisma database
    try {
      const galleryItem = await this.prisma.gallery.create({
        data: {
          activityId: dto.activityId,
          mediaUrl: processedMedia.mediaUrl,
          mediaType: processedMedia.mediaType,
          visibility: dto.visibility || Visibility.PUBLIC,
          title: dto.title?.trim() || null,
          description: dto.description?.trim() || null,
        },
      });

      this.logger.log(
        `Gallery item created with ID: ${galleryItem.id} for Activity: ${dto.activityId}`,
      );

      return galleryItem;
    } catch (dbError: unknown) {
      const err = dbError as Error;
      this.logger.error(
        `Database record creation failed. Cleaning up uploaded file: ${processedMedia.mediaUrl}`,
        err.stack,
      );
      // Clean up newly created disk file if database insertion fails
      await this.mediaService.deleteFileByUrl(processedMedia.mediaUrl);
      throw dbError;
    }
  }

  /**
   * Direct create with pre-existing mediaUrl (JSON payload)
   */
  async create(dto: CreateGalleryDto): Promise<Gallery> {
    const activity = await this.prisma.activity.findUnique({
      where: { id: dto.activityId },
    });

    if (!activity) {
      throw new NotFoundException(`Activity with ID "${dto.activityId}" not found`);
    }

    return this.prisma.gallery.create({
      data: {
        activityId: dto.activityId,
        mediaUrl: dto.mediaUrl,
        mediaType: dto.mediaType,
        visibility: dto.visibility || Visibility.PUBLIC,
        title: dto.title?.trim() || null,
        description: dto.description?.trim() || null,
      },
    });
  }

  /**
   * Retrieve all gallery items for a specific activity
   */
  async findByActivity(activityId: string, visibility?: Visibility): Promise<Gallery[]> {
    const where: { activityId: string; visibility?: Visibility } = { activityId };

    if (visibility) {
      where.visibility = visibility;
    }

    return this.prisma.gallery.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        activity: {
          select: {
            id: true,
            name: true,
            date: true,
          },
        },
      },
    });
  }

  /**
   * Retrieve a single gallery item by its unique ID
   */
  async findOne(id: string): Promise<Gallery> {
    const gallery = await this.prisma.gallery.findUnique({
      where: { id },
      include: {
        activity: {
          select: {
            id: true,
            name: true,
            date: true,
          },
        },
      },
    });

    if (!gallery) {
      throw new NotFoundException(`Gallery item with ID "${id}" not found`);
    }

    return gallery;
  }

  /**
   * Update metadata for an existing gallery item
   */
  async update(id: string, dto: UpdateGalleryDto): Promise<Gallery> {
    await this.findOne(id);

    if (dto.activityId) {
      const activity = await this.prisma.activity.findUnique({
        where: { id: dto.activityId },
      });
      if (!activity) {
        throw new NotFoundException(`Activity with ID "${dto.activityId}" not found`);
      }
    }

    return this.prisma.gallery.update({
      where: { id },
      data: {
        ...dto,
        title: dto.title !== undefined ? dto.title?.trim() || null : undefined,
        description: dto.description !== undefined ? dto.description?.trim() || null : undefined,
      },
    });
  }

  /**
   * Delete gallery record and its corresponding physical file on disk
   */
  async remove(id: string): Promise<Gallery> {
    const existing = await this.findOne(id);

    // Delete record from database
    const deleted = await this.prisma.gallery.delete({
      where: { id },
    });

    // Delete associated physical media file
    if (existing.mediaUrl) {
      await this.mediaService.deleteFileByUrl(existing.mediaUrl);
    }

    this.logger.log(`Deleted gallery item: ${id} and its associated media`);
    return deleted;
  }

  /**
   * Bulk create gallery items for an activity
   */
  async bulkCreate(activityId: string, dtos: CreateGalleryDto[]) {
    const activity = await this.prisma.activity.findUnique({
      where: { id: activityId },
    });

    if (!activity) {
      throw new NotFoundException(`Activity with ID "${activityId}" not found`);
    }

    return this.prisma.gallery.createMany({
      data: dtos.map((dto) => ({
        ...dto,
        activityId,
        title: dto.title?.trim() || null,
        description: dto.description?.trim() || null,
      })),
    });
  }
}
