import * as path from 'path';

export const ALLOWED_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/bmp',
  'image/tiff',
  'image/avif',
  'image/svg+xml',
];

export const ALLOWED_VIDEO_MIME_TYPES = [
  'video/mp4',
  'video/webm',
  'video/ogg',
  'video/quicktime',
  'video/x-matroska',
  'video/x-msvideo',
  'video/avi',
  'video/mpeg',
  'video/3gpp',
];

export const ALL_ALLOWED_MIME_TYPES = [
  ...ALLOWED_IMAGE_MIME_TYPES,
  ...ALLOWED_VIDEO_MIME_TYPES,
];

export const MAX_IMAGE_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
export const MAX_VIDEO_FILE_SIZE = 150 * 1024 * 1024; // 150 MB
export const DEFAULT_MAX_FILE_SIZE = 150 * 1024 * 1024; // 150 MB

export const DEFAULT_MEDIA_URL_PREFIX = '/api/media';
export const DEFAULT_EXTERNAL_STORAGE_PATH = path.resolve(process.cwd(), '..', 'hapua_uploads');
