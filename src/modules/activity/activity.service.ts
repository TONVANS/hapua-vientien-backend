import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import {
  PaginationQueryDto,
  SortOrder,
} from '../../common/dto/pagination-query.dto';
import { Prisma, ActivityStatus } from '../../generated/prisma';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  private computeStatus(
    startTime: Date | string,
    endTime: Date | string,
    currentStatus?: ActivityStatus,
  ): ActivityStatus {
    if (currentStatus === ActivityStatus.CANCELED) {
      return ActivityStatus.CANCELED;
    }
    const now = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    if (now < start) {
      return ActivityStatus.UPCOMING;
    } else if (now >= start && now <= end) {
      return ActivityStatus.ONGOING;
    } else {
      return ActivityStatus.COMPLETED;
    }
  }

  async create(dto: CreateActivityDto) {
    const startTime = new Date(dto.startTime);
    const endTime = new Date(dto.endTime);
    if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
      throw new BadRequestException('startTime and endTime must be valid dates');
    }
    if (startTime >= endTime) {
      throw new BadRequestException('startTime must be before endTime');
    }
    if (dto.roomId) {
      const room = await this.prisma.room.findUnique({
        where: { id: dto.roomId },
      });
      if (!room) throw new NotFoundException('Room not found');
    }

    const qrCode = uuidv4(); // Auto-generate QR code identifier
    const status =
      dto.status || this.computeStatus(startTime, endTime);

    // Extract calendar date (YYYY-MM-DD) to avoid UTC midnight shifts for @db.Date column
    const dateStr = dto.date.includes('T') ? dto.date.split('T')[0] : dto.date;

    return this.prisma.activity.create({
      data: {
        name: dto.name,
        description: dto.description,
        date: new Date(dateStr),
        startTime,
        endTime,
        status,
        qrCode,
        ...(dto.docURL ? { docURL: dto.docURL.trim() } : {}),
        ...(dto.allImageURL ? { allImageURL: dto.allImageURL.trim() } : {}),
        ...(dto.roomId ? { roomId: dto.roomId } : {}),
        ...(dto.registrationDeadline
          ? { registrationDeadline: new Date(dto.registrationDeadline) }
          : {}),
      },
    });
  }

  async findAll(
    query: PaginationQueryDto & { status?: ActivityStatus; roomId?: string },
  ) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const {
      search,
      sortBy = 'date',
      sortOrder = SortOrder.ASC,
      status,
      roomId,
    } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.ActivityWhereInput = {
      ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
      ...(status ? { status } : {}),
      ...(roomId ? { roomId } : {}),
    };

    const [rawActivities, total] = await Promise.all([
      this.prisma.activity.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ [sortBy]: sortOrder }, { startTime: 'asc' }],
        include: {
          room: { select: { name: true, location: true } },
          _count: { select: { delegations: true } },
        },
      }),
      this.prisma.activity.count({ where }),
    ]);

    const data = rawActivities.map((act) => ({
      ...act,
      status: this.computeStatus(act.startTime, act.endTime, act.status),
    }));

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findAllPublic(query: PaginationQueryDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const { search } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.ActivityWhereInput = {
      status: { not: 'CANCELED' },
      ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
    };

    const [rawActivities, total] = await Promise.all([
      this.prisma.activity.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ date: 'asc' }, { startTime: 'asc' }, { updatedAt: 'desc' }],
        select: {
          id: true,
          name: true,
          date: true,
          startTime: true,
          endTime: true,
          status: true,
          description: true,
          docURL: true,
          allImageURL: true,
          room: { select: { name: true, location: true } },
          _count: { select: { delegations: true } },
        },
      }),
      this.prisma.activity.count({ where }),
    ]);

    const data = rawActivities.map((act) => ({
      ...act,
      status: this.computeStatus(act.startTime, act.endTime, act.status),
    }));

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: string) {
    const activity = await this.prisma.activity.findFirst({
      where: {
        OR: [{ id }, { qrCode: id }],
      },
      include: {
        room: true,
        galleries: true,
        _count: { select: { delegations: true } },
        delegations: {
          orderBy: { registeredAt: 'desc' },
          include: {
            delegation: {
              select: {
                id: true,
                title: true,
                firstName: true,
                lastName: true,
                position: true,
                delegationCode: true,
                country: {
                  select: {
                    id: true,
                    name: true,
                    code: true,
                  },
                },
                organization: {
                  select: {
                    id: true,
                    name: true,
                    shortName: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!activity) throw new NotFoundException('Activity not found');
    return {
      ...activity,
      totalDelegations: activity._count?.delegations ?? activity.delegations?.length ?? 0,
      status: this.computeStatus(activity.startTime, activity.endTime, activity.status),
    };
  }

  async findOnePublic(id: string) {
    const activity = await this.prisma.activity.findFirst({
      where: {
        OR: [{ id }, { qrCode: id }],
      },
      select: {
        id: true,
        name: true,
        date: true,
        startTime: true,
        endTime: true,
        status: true,
        description: true,
        docURL: true,
        allImageURL: true,
        qrCode: true,
        room: { select: { name: true, location: true, capacity: true } },
        galleries: { where: { visibility: 'PUBLIC' } },
        _count: { select: { delegations: true } },
      },
    });
    if (!activity || activity.status === 'CANCELED')
      throw new NotFoundException('Activity not found');
    return {
      ...activity,
      status: this.computeStatus(activity.startTime, activity.endTime, activity.status),
    };
  }

  async getAgenda() {
    const activities = await this.prisma.activity.findMany({
      where: { status: { not: 'CANCELED' } },
      orderBy: [{ date: 'asc' }, { startTime: 'asc' }, { updatedAt: 'desc' }],
      select: {
        id: true,
        name: true,
        description: true,
        docURL: true,
        allImageURL: true,
        date: true,
        startTime: true,
        endTime: true,
        status: true,
        room: {
          select: {
            id: true,
            name: true,
            location: true,
            capacity: true,
          },
        },
      },
    });

    const agenda = activities.reduce(
      (acc, curr) => {
        let dateStr = '';
        try {
          if (curr.date instanceof Date) {
            dateStr = curr.date.toISOString().split('T')[0];
          } else if (typeof curr.date === 'string') {
            dateStr = (curr.date as string).split('T')[0];
          } else if (curr.date) {
            dateStr = new Date(curr.date).toISOString().split('T')[0];
          }
        } catch {
          dateStr = String(curr.date);
        }
        if (!dateStr) dateStr = 'unknown';

        if (!acc[dateStr]) acc[dateStr] = [];
        acc[dateStr].push({
          ...curr,
          status: this.computeStatus(curr.startTime, curr.endTime, curr.status),
        });
        return acc;
      },
      {} as Record<string, any[]>,
    );

    return agenda;
  }

  async update(id: string, dto: UpdateActivityDto) {
    const existing = await this.prisma.activity.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Activity not found');

    const startTime = dto.startTime ? new Date(dto.startTime) : existing.startTime;
    const endTime = dto.endTime ? new Date(dto.endTime) : existing.endTime;

    if (isNaN(startTime.getTime()) || isNaN(endTime.getTime())) {
      throw new BadRequestException('startTime and endTime must be valid dates');
    }
    if (startTime >= endTime) {
      throw new BadRequestException('startTime must be before endTime');
    }
    if (dto.roomId) {
      const room = await this.prisma.room.findUnique({
        where: { id: dto.roomId },
      });
      if (!room) throw new NotFoundException('Room not found');
    }

    let status = dto.status;
    if (!status && existing.status !== ActivityStatus.CANCELED) {
      status = this.computeStatus(startTime, endTime, existing.status);
    }

    const updatedDateStr = dto.date
      ? dto.date.includes('T')
        ? dto.date.split('T')[0]
        : dto.date
      : undefined;

    return this.prisma.activity.update({
      where: { id },
      data: {
        ...(dto.name ? { name: dto.name } : {}),
        ...(dto.description !== undefined ? { description: dto.description } : {}),
        ...(dto.docURL !== undefined ? { docURL: dto.docURL ? dto.docURL.trim() : null } : {}),
        ...(dto.allImageURL !== undefined ? { allImageURL: dto.allImageURL ? dto.allImageURL.trim() : null } : {}),
        ...(updatedDateStr ? { date: new Date(updatedDateStr) } : {}),
        ...(dto.startTime ? { startTime } : {}),
        ...(dto.endTime ? { endTime } : {}),
        ...(status ? { status } : {}),
        ...(dto.roomId !== undefined ? { roomId: dto.roomId || null } : {}),
        ...(dto.registrationDeadline !== undefined
          ? {
              registrationDeadline: dto.registrationDeadline
                ? new Date(dto.registrationDeadline)
                : null,
            }
          : {}),
      },
    });
  }

  async remove(id: string) {
    const existing = await this.prisma.activity.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Activity not found');
    return this.prisma.activity.delete({ where: { id } });
  }
}
