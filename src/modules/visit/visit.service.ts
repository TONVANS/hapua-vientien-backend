import { Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';
import { PrismaService } from '../../prisma/prisma.service';

export interface VisitStats {
  totalVisits: number;
  todayVisits: number;
}

@Injectable()
export class VisitService {
  private readonly logger = new Logger(VisitService.name);
  private readonly HASH_SALT = process.env.JWT_SECRET || 'hapua-council-visit-tracker';
  private readonly DEDUP_WINDOW_MS = 15 * 60 * 1000; // 15 minutes anti-spam window

  constructor(private readonly prisma: PrismaService) {}

  /**
   * Hashes client IP to comply with privacy (PDPA/GDPR) while enabling anti-spam deduplication.
   */
  private hashIp(ip: string): string {
    return crypto
      .createHash('sha256')
      .update(`${ip}-${this.HASH_SALT}`)
      .digest('hex');
  }

  /**
   * Gets the start of the current day in local server time.
   */
  private getStartOfToday(): Date {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  }

  /**
   * Records a site visit with deduplication.
   * If the same IP accessed within 15 minutes, the visit count is not incremented.
   */
  async recordVisit(ip: string, userAgent?: string, path?: string): Promise<VisitStats> {
    const ipHash = ip ? this.hashIp(ip) : null;

    try {
      let isDuplicate = false;

      if (ipHash) {
        const threshold = new Date(Date.now() - this.DEDUP_WINDOW_MS);
        const recentVisit = await this.prisma.siteVisit.findFirst({
          where: {
            ipHash,
            createdAt: { gte: threshold },
          },
          select: { id: true },
        });

        if (recentVisit) {
          isDuplicate = true;
        }
      }

      if (!isDuplicate) {
        await this.prisma.siteVisit.create({
          data: {
            ipHash,
            userAgent: userAgent ? userAgent.slice(0, 500) : null,
            path: path ? path.slice(0, 255) : '/',
          },
        });
      }
    } catch (error) {
      this.logger.error('Failed to record site visit', error);
    }

    return this.getStats();
  }

  /**
   * Retrieves overall visit count and today's visit count.
   */
  async getStats(): Promise<VisitStats> {
    try {
      const startOfToday = this.getStartOfToday();

      const [totalVisits, todayVisits] = await Promise.all([
        this.prisma.siteVisit.count(),
        this.prisma.siteVisit.count({
          where: {
            createdAt: { gte: startOfToday },
          },
        }),
      ]);

      return {
        totalVisits,
        todayVisits,
      };
    } catch (error) {
      this.logger.error('Failed to get visit statistics', error);
      return { totalVisits: 0, todayVisits: 0 };
    }
  }
}
