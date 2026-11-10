import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Controller, Get, Param, Header, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { Throttle } from '@nestjs/throttler';
import { GalleryService } from '../modules/gallery/gallery.service';
import { Public } from '../common/decorators/public.decorator';
import { Visibility } from '../generated/prisma';
import { GalleryResponseDto } from '../modules/gallery/dto/gallery-response.dto';

@ApiTags('Public - Gallery')
@Controller('public/gallery')
@Public()
@UseInterceptors(CacheInterceptor)
export class PublicGalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Throttle({ default: { limit: 30, ttl: 60000 } })
  @CacheTTL(120000)
  @Header('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600')
  @Get('activity/:activityId')
  @ApiOperation({ summary: 'Get public gallery media items for an activity' })
  @ApiParam({ name: 'activityId', description: 'Activity UUID' })
  @ApiResponse({
    status: 200,
    description: 'List of public gallery items',
    type: [GalleryResponseDto],
  })
  findByActivity(@Param('activityId') activityId: string) {
    return this.galleryService.findByActivity(activityId, Visibility.PUBLIC);
  }
}
