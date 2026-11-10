import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsArray,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Weekday } from '../../../generated/prisma';

export class CreateTravelDto {
  @ApiProperty({
    description: 'Name of the travel destination or attraction',
    example: 'Kuang Si Waterfalls',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  placeName: string;

  @ApiPropertyOptional({
    description: 'Detailed description of the attraction',
    example:
      'Three-tiered turquoise waterfall complex featuring travertine cascade pools.',
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  description?: string;

  @ApiProperty({
    description: 'Physical location or area description',
    example: 'About 25 km southeast of Vientiane',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  location: string;

  @ApiPropertyOptional({
    description:
      'Opening time (e.g. "08:00", "08:00:00" or ISO timestamp)',
    example: '08:00',
  })
  @IsOptional()
  @IsString()
  openTime?: string;

  @ApiPropertyOptional({
    description:
      'Closing time (e.g. "17:30", "17:30:00" or ISO timestamp)',
    example: '17:30',
  })
  @IsOptional()
  @IsString()
  closeTime?: string;

  @ApiPropertyOptional({
    description: 'Days of week when the attraction is open',
    enum: Weekday,
    isArray: true,
    example: [
      Weekday.MONDAY,
      Weekday.TUESDAY,
      Weekday.WEDNESDAY,
      Weekday.THURSDAY,
      Weekday.FRIDAY,
      Weekday.SATURDAY,
      Weekday.SUNDAY,
    ],
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (value === '' || value === null || value === undefined) return undefined;
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        return value
          .split(',')
          .map((s: string) => s.trim().toUpperCase())
          .filter(Boolean);
      }
      return [value.toUpperCase()];
    }
    if (Array.isArray(value)) {
      return value.map((v: string) =>
        typeof v === 'string' ? v.trim().toUpperCase() : v,
      );
    }
    return value;
  })
  @IsArray()
  @IsEnum(Weekday, { each: true })
  openDays?: Weekday[];

  @ApiPropertyOptional({
    description: 'Google Maps location URL',
    example: 'https://maps.google.com/?q=Kuang+Si+Waterfall',
  })
  @IsOptional()
  @IsString()
  mapUrl?: string;

  @ApiPropertyOptional({
    description:
      'Direct URL to cover image (used if not uploading a coverImage file)',
    example:
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80',
  })
  @IsOptional()
  @IsString()
  coverImage?: string;

  @ApiPropertyOptional({
    description:
      'Array of pre-existing image URLs for gallery (if not uploading files)',
    type: [String],
    example: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
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
