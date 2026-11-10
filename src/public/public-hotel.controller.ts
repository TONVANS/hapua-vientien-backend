import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Controller, Get, Param, Query, Header, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { Throttle } from '@nestjs/throttler';
import { HotelService } from '../modules/hotel/hotel.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Public } from '../common/decorators/public.decorator';

@ApiTags('Public - Hotel')
@Controller('public/hotels')
@Public()
@UseInterceptors(CacheInterceptor)
export class PublicHotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Throttle({ default: { limit: 30, ttl: 60000 } })
  @CacheTTL(120000)
  @Header('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600')
  @Get()
  @ApiOperation({
    summary:
      'Get paginated list of recommended hotels with gallery images for delegates and public view',
  })
  @ApiResponse({
    status: 200,
    description: 'List of hotel recommendations with nested gallery images.',
  })
  findAll(@Query() query: PaginationQueryDto) {
    return this.hotelService.findAll(query);
  }

  @Throttle({ default: { limit: 40, ttl: 60000 } })
  @CacheTTL(120000)
  @Header('Cache-Control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600')
  @Get(':id')
  @ApiOperation({
    summary:
      'Get detailed information of a recommended hotel including gallery images',
  })
  @ApiParam({ name: 'id', description: 'Hotel UUID' })
  @ApiResponse({
    status: 200,
    description: 'Hotel details with nested gallery images.',
  })
  @ApiResponse({ status: 404, description: 'Hotel not found.' })
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(id);
  }
}
