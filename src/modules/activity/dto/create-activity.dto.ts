import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsDateString,
  IsUUID,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ActivityStatus } from '../../../generated/prisma';

export class CreateActivityDto {
  @ApiProperty({ description: 'Activity name / title' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ description: 'Detailed description of the activity' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: 'Link to official session documentation or minutes' })
  @IsOptional()
  @Transform(({ value }) => (value === '' || value === null ? undefined : value))
  @IsString()
  docURL?: string;

  @ApiPropertyOptional({ description: 'Link to full cloud photo album or gallery archive' })
  @IsOptional()
  @Transform(({ value }) => (value === '' || value === null ? undefined : value))
  @IsString()
  allImageURL?: string;

  @ApiProperty({ description: 'Activity event date (YYYY-MM-DD)' })
  @IsDateString()
  date: string;

  @ApiProperty({ description: 'Start time (ISO string or HH:mm)' })
  @IsDateString()
  startTime: string;

  @ApiProperty({ description: 'End time (ISO string or HH:mm)' })
  @IsDateString()
  endTime: string;

  @ApiPropertyOptional({ enum: ActivityStatus, description: 'Activity status' })
  @IsOptional()
  @IsEnum(ActivityStatus)
  status?: ActivityStatus;

  @ApiPropertyOptional({ description: 'Registration deadline' })
  @IsOptional()
  @Transform(({ value }) => (value === '' || value === null ? undefined : value))
  @IsDateString()
  registrationDeadline?: string;

  @ApiPropertyOptional({ description: 'Assigned meeting room UUID' })
  @IsOptional()
  @Transform(({ value }) => (value === '' || value === null ? undefined : value))
  @IsUUID()
  roomId?: string;
}


