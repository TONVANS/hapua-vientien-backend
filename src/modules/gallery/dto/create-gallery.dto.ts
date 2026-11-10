import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { MediaType, Visibility } from '../../../generated/prisma';

export class CreateGalleryDto {
  @ApiProperty({
    description: 'The ID of the activity associated with this gallery item',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID('4', { message: 'activityId must be a valid UUID' })
  @IsNotEmpty({ message: 'activityId is required' })
  activityId: string;

  @ApiProperty({
    description: 'URL pointing to the media asset',
    example: '/public/uploads/galleries/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d.webp',
  })
  @IsString()
  @IsNotEmpty({ message: 'mediaUrl is required' })
  mediaUrl: string;

  @ApiPropertyOptional({
    enum: MediaType,
    default: MediaType.IMAGE,
    description: 'Media type (IMAGE or VIDEO)',
    example: MediaType.IMAGE,
  })
  @IsOptional()
  @IsEnum(MediaType, { message: 'mediaType must be IMAGE or VIDEO' })
  mediaType?: MediaType;

  @ApiPropertyOptional({
    enum: Visibility,
    default: Visibility.PUBLIC,
    description: 'Visibility level (PUBLIC or PRIVATE)',
    example: Visibility.PUBLIC,
  })
  @IsOptional()
  @IsEnum(Visibility, { message: 'visibility must be PUBLIC or PRIVATE' })
  visibility?: Visibility;

  @ApiPropertyOptional({
    description: 'Optional title of the gallery item',
    example: 'Opening Ceremony Photo',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Optional description of the gallery item',
    example: 'Delegates gathering at the opening ceremony.',
  })
  @IsOptional()
  @IsString()
  description?: string;
}
