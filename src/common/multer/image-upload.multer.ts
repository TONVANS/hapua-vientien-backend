import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { memoryStorage } from 'multer';
import {
  ALLOWED_IMAGE_MIME_TYPES,
  MAX_IMAGE_FILE_SIZE,
} from '../../modules/gallery/gallery.constants';

/**
 * Reusable Multer options configuration for single and bulk image uploads.
 * Restricts uploads strictly to valid image MIME types and enforces file size limits.
 */
export const imageUploadMulterOptions: MulterOptions = {
  storage: memoryStorage(),
  limits: {
    fileSize: MAX_IMAGE_FILE_SIZE, // 25 MB max per file
    files: 25, // Maximum 25 files in a single multipart request
  },
  fileFilter: (req, file, callback) => {
    if (!file) {
      return callback(null, true);
    }

    const mime = file.mimetype.toLowerCase();
    const isAllowed =
      ALLOWED_IMAGE_MIME_TYPES.includes(mime) || mime.startsWith('image/');

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(
        new BadRequestException(
          `Unsupported image file type "${file.mimetype}". Allowed types: JPEG, PNG, WEBP, GIF, SVG, BMP, TIFF, AVIF.`,
        ),
        false,
      );
    }
  },
};
