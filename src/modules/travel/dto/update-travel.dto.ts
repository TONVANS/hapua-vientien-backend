import { PartialType, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateTravelDto } from './create-travel.dto';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTravelDto extends PartialType(CreateTravelDto) {
  @ApiPropertyOptional({
    description:
      'Array of existing TravelImage UUIDs to remove from this travel gallery',
    type: [String],
    example: ['123e4567-e89b-12d3-a456-426614174000'],
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
  deletedImageIds?: string[];

  @ApiPropertyOptional({
    description:
      'If true, replaces all existing gallery images with newly provided/uploaded ones. If false (default), appends them.',
    example: false,
    default: false,
  })
  @IsOptional()
  @Transform(
    ({ value }) =>
      value === 'true' || value === true || value === 1 || value === '1',
  )
  @IsBoolean()
  replaceImages?: boolean;
}
