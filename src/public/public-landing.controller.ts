import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Header, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { Throttle } from '@nestjs/throttler';
import { Public } from '../common/decorators/public.decorator';
import { ActivityService } from '../modules/activity/activity.service';
import { HotelService } from '../modules/hotel/hotel.service';
import { TravelService } from '../modules/travel/travel.service';
import { PrismaService } from '../prisma/prisma.service';
import { SortOrder } from '../common/dto/pagination-query.dto';

@ApiTags('Public - Landing Overview')
@Controller('public/landing')
@Public()
@UseInterceptors(CacheInterceptor)
export class PublicLandingController {
  constructor(
    private readonly activityService: ActivityService,
    private readonly hotelService: HotelService,
    private readonly travelService: TravelService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('health')
  getHealth() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }

  @Throttle({ default: { limit: 20, ttl: 60000 } })
  @CacheTTL(120000)
  @Header('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600')
  @Get()
  async getLandingOverview() {
    const [
      activitiesResult,
      hotelsResult,
      travelResult,
      totalDelegates,
      totalCountries,
      totalOrgs,
    ] = await Promise.all([
      this.activityService.findAllPublic({
        limit: 4,
        page: 1,
        sortBy: 'date',
        sortOrder: SortOrder.ASC,
      }),
      this.hotelService.findAll({
        limit: 6,
        page: 1,
        sortBy: 'createdAt',
        sortOrder: SortOrder.DESC,
      }),
      this.travelService.findAll({
        limit: 6,
        page: 1,
        sortBy: 'createdAt',
        sortOrder: SortOrder.DESC,
      }),
      this.prisma.delegation.count().catch(() => 0),
      this.prisma.country.count().catch(() => 0),
      this.prisma.organization.count().catch(() => 0),
    ]);

    return {
      stats: {
        memberStates: totalCountries > 0 ? totalCountries : 11,
        accreditedDelegates: totalDelegates > 0 ? totalDelegates : 500,
        powerUtilities: totalOrgs > 0 ? totalOrgs : 50,
        eventDays: 3,
      },
      featuredActivities: activitiesResult.data || [],
      featuredHotels: hotelsResult.data || [],
      featuredTravel: travelResult.data || [],
    };
  }
}
