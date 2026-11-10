import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { memoryStorage } from 'multer';
import {
  ALL_ALLOWED_MIME_TYPES,
  DEFAULT_MAX_FILE_SIZE,
} from './gallery.constants';

export const galleryMulterOptions: MulterOptions = {
  storage: memoryStorage(),
  limits: {
    fileSize: DEFAULT_MAX_FILE_SIZE, // 150 MB max limit
  },
  fileFilter: (req, file, callback) => {
    if (!file) {
      return callback(
        new BadRequestException('No file provided in form-data field "file"'),
        false,
      );
    }

    const mime = file.mimetype.toLowerCase();
    const isAllowed =
      ALL_ALLOWED_MIME_TYPES.includes(mime) ||
      mime.startsWith('image/') ||
      mime.startsWith('video/');

    if (isAllowed) {
      callback(null, true);
    } else {
      callback(
        new BadRequestException(
          `Unsupported file type "${file.mimetype}". Allowed types: JPEG, PNG, WEBP, GIF, SVG, MP4, WEBM, MOV, MKV, AVI.`,
        ),
        false,
      );
    }
  },
};
