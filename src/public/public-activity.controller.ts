import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Query, Header, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { Throttle } from '@nestjs/throttler';
import { ActivityService } from '../modules/activity/activity.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Public - Activity')
@Controller('public/activities')
@Public()
@UseInterceptors(CacheInterceptor)
export class PublicActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Throttle({ default: { limit: 30, ttl: 60000 } })
  @CacheTTL(60000)
  @Header('Cache-Control', 'public, max-age=60, s-maxage=120, stale-while-revalidate=300')
  @Get('agenda')
  getAgenda() {
    return this.activityService.getAgenda();
  }

  @Throttle({ default: { limit: 30, ttl: 60000 } })
  @CacheTTL(60000)
  @Header('Cache-Control', 'public, max-age=60, s-maxage=120, stale-while-revalidate=300')
  @Get()
  findAllPublic(@Query() query: PaginationQueryDto) {
    return this.activityService.findAllPublic(query);
  }

  @Throttle({ default: { limit: 40, ttl: 60000 } })
  @CacheTTL(60000)
  @Header('Cache-Control', 'public, max-age=60, s-maxage=120, stale-while-revalidate=300')
  @Get(':id')
  findOnePublic(@Param('id') id: string) {
    return this.activityService.findOnePublic(id);
  }
}
