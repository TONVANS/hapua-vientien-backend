import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../generated/prisma';

@ApiTags('Admin - Report')
@ApiBearerAuth()
@Controller('admin/reports')
@Roles(Role.ADMIN)
export class AdminReportController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('dashboard')
  async getDashboardStats() {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const [
      totalDelegations,
      totalActivities,
      totalRooms,
      totalHotels,
      totalVisits,
      todayVisits,
    ] = await Promise.all([
      this.prisma.delegation.count(),
      this.prisma.activity.count(),
      this.prisma.room.count(),
      this.prisma.hotelRecommend.count(),
      this.prisma.siteVisit.count(),
      this.prisma.siteVisit.count({
        where: { createdAt: { gte: startOfToday } },
      }),
    ]);

    return {
      totalDelegations,
      totalActivities,
      totalRooms,
      totalHotels,
      totalVisits,
      todayVisits,
    };
  }

  @Get('activity-registrations')
  async getActivityRegistrations() {
    const activities = await this.prisma.activity.findMany({
      select: {
        id: true,
        name: true,
        date: true,
        _count: { select: { delegations: true } },
      },
      orderBy: { date: 'asc' },
    });
    return activities.map((a) => ({
      activityId: a.id,
      activityName: a.name,
      date: a.date,
      registeredCount: a._count.delegations,
    }));
  }
}
