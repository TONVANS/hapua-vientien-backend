import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsArray,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateHotelDto {
  @ApiProperty({
    description: 'Name of the hotel',
    example: 'Landmark Mekong Riverside Hotel',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  name: string;

  @ApiProperty({
    description: 'Physical address of the hotel',
    example: 'Thadeua Road, Vientiane Capital, Lao PDR',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  address: string;

  @ApiPropertyOptional({
    description: 'Detailed description of the hotel',
    example:
      'Exclusive 5-star luxury resort set in historic French colonial grounds within walking distance of Phousi Hill.',
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  description?: string;

  @ApiPropertyOptional({
    description: 'Hotel star rating (0-5)',
    example: 5,
    default: 0,
    minimum: 0,
    maximum: 5,
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === '' || value === null || value === undefined) return undefined;
    const num = Number(value);
    return isNaN(num) ? value : num;
  })
  @IsNumber()
  @Min(0)
  @Max(5)
  starRating?: number;

  @ApiPropertyOptional({
    description: 'Contact phone number, email, or details',
    example: '+856 71 860 333 | reservations@amantaka.com',
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  contactInfo?: string;

  @ApiPropertyOptional({
    description:
      'Direct URL to cover image (used if not uploading a coverImage file)',
    example:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  })
  @IsOptional()
  @IsString()
  coverImage?: string;

  @ApiPropertyOptional({
    description: 'Official website URL or booking URL',
    example: 'https://www.aman.com/resorts/amantaka',
  })
  @IsOptional()
  @IsString()
  websiteUrl?: string;

  @ApiPropertyOptional({
    description: 'Google Maps location URL',
    example: 'https://maps.google.com/?q=Landmark+Mekong+Riverside+Hotel+Vientiane',
  })
  @IsOptional()
  @IsString()
  mapUrl?: string;

  @ApiPropertyOptional({
    description:
      'Array of pre-existing image URLs for gallery (if not uploading files)',
    type: [String],
    example: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    ],
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
