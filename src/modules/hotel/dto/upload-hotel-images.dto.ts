import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UploadHotelImagesDto {
  @ApiPropertyOptional({
    description:
      'Array of pre-existing image URLs to add to the hotel gallery',
    type: [String],
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        return value
          .split(',')
          .map((s: string) => s.trim())
          .filter(Boolean);
      }
      return [value];
    }
    return value;
  })
  @IsArray()
  @IsString({ each: true })
  imageUrls?: string[];
}
