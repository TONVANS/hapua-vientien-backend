import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MediaType, Visibility } from '../../../generated/prisma';

export class GalleryResponseDto {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d' })
  id: string;

  @ApiPropertyOptional({ example: 'Opening Ceremony Photo' })
  title: string | null;

  @ApiProperty({
    example:
      '/public/uploads/galleries/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d.webp',
  })
  mediaUrl: string;

  @ApiProperty({ enum: MediaType, example: MediaType.IMAGE })
  mediaType: MediaType;

  @ApiProperty({ enum: Visibility, example: Visibility.PUBLIC })
  visibility: Visibility;

  @ApiPropertyOptional({ example: 'Photo taken during the opening session.' })
  description: string | null;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  activityId: string;

  @ApiProperty({ example: '2026-08-18T10:00:00.000Z' })
  createdAt: Date;
}
