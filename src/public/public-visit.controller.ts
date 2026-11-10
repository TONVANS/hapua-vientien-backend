import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { Throttle } from '@nestjs/throttler';
import { Public } from '../common/decorators/public.decorator';
import { VisitService, VisitStats } from '../modules/visit/visit.service';

export class RecordVisitDto {
  path?: string;
}

@ApiTags('Public - Site Visit')
@Controller('public/visit')
@Public()
export class PublicVisitController {
  constructor(private readonly visitService: VisitService) {}

  /**
   * Record a new visit (with 15-min IP deduplication) and return updated stats
   */
  @Post()
  @Throttle({ default: { limit: 30, ttl: 60000 } })
  @ApiOperation({ summary: 'Record a website visit and get visitor stats' })
  async recordVisit(
    @Req() req: Request,
    @Body() body?: RecordVisitDto,
  ): Promise<VisitStats> {
    const rawForwarded = req.headers['x-forwarded-for'];
    const ip =
      (typeof rawForwarded === 'string'
        ? rawForwarded.split(',')[0].trim()
        : Array.isArray(rawForwarded)
          ? rawForwarded[0]
          : null) ||
      req.ip ||
      req.socket?.remoteAddress ||
      '';

    const userAgent = req.headers['user-agent'] as string | undefined;
    const path = body?.path || '/';

    return this.visitService.recordVisit(ip, userAgent, path);
  }

  /**
   * Get current visitor statistics without incrementing
   */
  @Get()
  @Throttle({ default: { limit: 60, ttl: 60000 } })
  @ApiOperation({ summary: 'Get current website visitor stats' })
  async getStats(): Promise<VisitStats> {
    return this.visitService.getStats();
  }
}
