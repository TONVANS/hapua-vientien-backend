import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import {
  PaginationQueryDto,
  SortOrder,
} from '../../common/dto/pagination-query.dto';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRoomDto) {
    return this.prisma.room.create({ data: dto });
  }

  async findAll(query: PaginationQueryDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const { search, sortBy = 'createdAt', sortOrder = SortOrder.DESC } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.RoomWhereInput = search
      ? { name: { contains: search, mode: 'insensitive' } }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.room.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: { _count: { select: { activities: true } } },
      }),
      this.prisma.room.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: string) {
    const room = await this.prisma.room.findUnique({
      where: { id },
      include: {
        activities: {
          where: { status: { in: ['UPCOMING', 'ONGOING'] } },
          select: {
            id: true,
            name: true,
            date: true,
            startTime: true,
            endTime: true,
            status: true,
          },
        },
      },
    });
    if (!room) throw new NotFoundException('Room not found');
    return room;
  }

  async update(id: string, dto: UpdateRoomDto) {
    await this.findOne(id);
    return this.prisma.room.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    const room = await this.findOne(id);
    if (room.activities.length > 0) {
      throw new ConflictException(
        'Cannot delete room with assigned activities',
      );
    }
    return this.prisma.room.delete({ where: { id } });
  }
}
