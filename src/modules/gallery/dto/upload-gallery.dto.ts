import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Visibility } from '../../../generated/prisma';

export class UploadGalleryDto {
  @ApiProperty({
    description: 'The ID of the activity associated with this gallery item',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID('4', { message: 'activityId must be a valid UUID' })
  @IsNotEmpty({ message: 'activityId is required' })
  activityId: string;

  @ApiPropertyOptional({
    description: 'Optional title or caption for the media',
    example: 'Opening Keynote Speech',
  })
  @IsOptional()
  @IsString({ message: 'title must be a string' })
  title?: string;

  @ApiPropertyOptional({
    description: 'Optional detailed description of the media item',
    example:
      'Delegates gathering at the grand ballroom during the opening session.',
  })
  @IsOptional()
  @IsString({ message: 'description must be a string' })
  description?: string;

  @ApiPropertyOptional({
    enum: Visibility,
    default: Visibility.PUBLIC,
    description: 'Access visibility for the media item (PUBLIC or PRIVATE)',
    example: Visibility.PUBLIC,
  })
  @IsOptional()
  @IsEnum(Visibility, {
    message: 'visibility must be either PUBLIC or PRIVATE',
  })
  visibility?: Visibility;
}
