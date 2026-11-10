import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDelegationDto } from './dto/create-delegation.dto';
import { UpdateDelegationDto } from './dto/update-delegation.dto';
import { RegisterActivityDto } from './dto/register-activity.dto';
import {
  PaginationQueryDto,
  SortOrder,
} from '../../common/dto/pagination-query.dto';
import { Prisma } from '../../generated/prisma';
import type { Response } from 'express';
import { Readable } from 'stream';

@Injectable()
export class DelegationService {
  constructor(private prisma: PrismaService) {}

  private async generateDelegationCode(): Promise<string> {
    let code = '';

    // Generate a random 4-digit code (1000-9999) and ensure uniqueness.
    // Limit attempts to avoid potential infinite loops if space is saturated.
    for (let attempts = 0; attempts < 10; attempts++) {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      code = `${randomNum}`;

      const existing = await this.prisma.delegation.findUnique({
        where: { delegationCode: code },
      });

      if (!existing) {
        return code;
      }
    }

    throw new ConflictException(
      'Unable to generate a unique delegation code. Please try again.',
    );
  }

  async create(dto: CreateDelegationDto) {
    const exists = await this.prisma.delegation.findUnique({
      where: { email: dto.email },
    });
    if (exists) throw new ConflictException('Email already in use');

    if (dto.countryId) {
      const countryExists = await this.prisma.country.findUnique({
        where: { id: dto.countryId },
      });
      if (!countryExists) throw new NotFoundException('Country not found');
    }

    if (dto.organizationId) {
      const orgExists = await this.prisma.organization.findUnique({
        where: { id: dto.organizationId },
      });
      if (!orgExists) throw new NotFoundException('Organization not found');
    }

    const code = await this.generateDelegationCode();

    return this.prisma.delegation.create({
      data: { ...dto, delegationCode: code },
    });
  }

  async findAll(
    query: PaginationQueryDto & { countryId?: string; organizationId?: string },
  ) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const {
      search,
      sortBy = 'createdAt',
      sortOrder = SortOrder.DESC,
      countryId,
      organizationId,
    } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.DelegationWhereInput = {
      ...(search
        ? {
            OR: [
              { firstName: { contains: search, mode: 'insensitive' } },
              { lastName: { contains: search, mode: 'insensitive' } },
              { email: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {}),
      ...(countryId ? { countryId } : {}),
      ...(organizationId ? { organizationId } : {}),
    };

    const [data, total] = await Promise.all([
      this.prisma.delegation.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          country: true,
          organization: true,
          _count: { select: { activities: true } },
        },
      }),
      this.prisma.delegation.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: string) {
    const del = await this.prisma.delegation.findUnique({
      where: { id },
      include: {
        country: true,
        organization: true,
        activities: { include: { activity: true } },
      },
    });
    if (!del) throw new NotFoundException('Delegation not found');
    return del;
  }

  async findByCode(delegationCode: string) {
    const del = await this.prisma.delegation.findUnique({
      where: { delegationCode },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        title: true,
        position: true,
        activities: {
          include: {
            activity: {
              select: {
                id: true,
                name: true,
                date: true,
                startTime: true,
                endTime: true,
                room: { select: { name: true } },
              },
            },
          },
        },
      },
    });
    if (!del) throw new NotFoundException('Invalid delegation code');
    return del;
  }

  async registerForActivity(dto: RegisterActivityDto) {
    const del = await this.prisma.delegation.findUnique({
      where: { delegationCode: dto.delegationCode },
    });
    if (!del) throw new NotFoundException('Invalid delegation code');

    const act = await this.prisma.activity.findFirst({
      where: {
        OR: [{ id: dto.activityId }, { qrCode: dto.activityId }],
      },
      include: { room: true, _count: { select: { delegations: true } } },
    });
    if (!act) throw new NotFoundException('Activity not found');

    if (act.status === 'CANCELED')
      throw new BadRequestException('Activity has been canceled');

    // Check if activity start date has been reached
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    let actDateStr = '';
    if (act.date instanceof Date) {
      actDateStr = act.date.toISOString().split('T')[0];
    } else if (typeof act.date === 'string') {
      actDateStr = (act.date as string).split('T')[0];
    }
    if (actDateStr && todayStr < actDateStr) {
      throw new BadRequestException(
        'Registration is not yet open. It will open on the activity start date.',
      );
    }

    if (act.status !== 'UPCOMING' && act.status !== 'ONGOING')
      throw new BadRequestException(
        'Activity is not available for registration',
      );
    if (act.registrationDeadline && new Date() > act.registrationDeadline)
      throw new BadRequestException('Registration deadline has passed');

    if (act.room && act.room.capacity <= act._count.delegations) {
      throw new BadRequestException('Room capacity has been reached');
    }

    try {
      await this.prisma.activityDelegation.create({
        data: { activityId: act.id, delegationId: del.id },
      });
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Already registered for this activity');
      throw error;
    }

    return { message: 'Successfully registered for the activity' };
  }

  async update(id: string, dto: UpdateDelegationDto) {
    await this.findOne(id);
    return this.prisma.delegation.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.delegation.delete({ where: { id } });
  }

  async exportDelegationsStream(
    res: Response,
    query?: { search?: string; countryId?: string; organizationId?: string },
  ) {
    const { search, countryId, organizationId } = query || {};

    const where: Prisma.DelegationWhereInput = {
      ...(search
        ? {
            OR: [
              { firstName: { contains: search, mode: 'insensitive' } },
              { lastName: { contains: search, mode: 'insensitive' } },
              { email: { contains: search, mode: 'insensitive' } },
              { delegationCode: { contains: search, mode: 'insensitive' } },
            ],
          }
        : {}),
      ...(countryId ? { countryId } : {}),
      ...(organizationId ? { organizationId } : {}),
    };

    const dateStr = new Date().toISOString().split('T')[0];
    const filename = `delegations_export_${dateStr}.csv`;

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Transfer-Encoding', 'chunked');

    const escapeCsvField = (value: unknown): string => {
      if (value === null || value === undefined) return '';
      const str = String(value);
      if (
        str.includes(',') ||
        str.includes('"') ||
        str.includes('\n') ||
        str.includes('\r')
      ) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    const headers = [
      'Delegation Code',
      'Title',
      'First Name',
      'Last Name',
      'Full Name',
      'Email',
      'Phone Number',
      'Position',
      'Organization',
      'Country',
      'Role',
      'Activities Registered',
      'Created At',
    ];

    const prisma = this.prisma;
    const BATCH_SIZE = 500;

    async function* generateCsvChunks() {
      // 1. Send UTF-8 BOM so Excel opens UTF-8 characters (Thai, Lao, etc.) cleanly
      yield '\uFEFF';

      // 2. Send Header row
      yield headers.map(escapeCsvField).join(',') + '\r\n';

      // 3. Query in cursor batches to avoid memory overload (O(1) memory footprint)
      let cursorId: string | undefined = undefined;

      while (true) {
        const batch = await prisma.delegation.findMany({
          where,
          take: BATCH_SIZE,
          skip: cursorId ? 1 : 0,
          cursor: cursorId ? { id: cursorId } : undefined,
          orderBy: { id: 'asc' },
          include: {
            country: { select: { name: true, code: true } },
            organization: { select: { name: true, shortName: true } },
            _count: { select: { activities: true } },
          },
        });

        if (batch.length === 0) {
          break;
        }

        let chunk = '';
        for (const item of batch) {
          const orgName = item.organization
            ? item.organization.shortName
              ? `${item.organization.shortName} - ${item.organization.name}`
              : item.organization.name
            : '';
          const countryName = item.country
            ? item.country.code
              ? `${item.country.name} (${item.country.code})`
              : item.country.name
            : '';
          const fullName = `${item.title ? item.title + ' ' : ''}${item.firstName} ${item.lastName}`.trim();
          const createdAt = item.createdAt
            ? new Date(item.createdAt).toISOString()
            : '';

          const row = [
            item.delegationCode || '',
            item.title || '',
            item.firstName || '',
            item.lastName || '',
            fullName,
            item.email || '',
            item.phoneNumber || '',
            item.position || '',
            orgName,
            countryName,
            item.role || '',
            item._count?.activities ?? 0,
            createdAt,
          ];

          chunk += row.map(escapeCsvField).join(',') + '\r\n';
        }

        yield chunk;

        cursorId = batch[batch.length - 1].id;
        if (batch.length < BATCH_SIZE) {
          break;
        }
      }
    }

    const stream = Readable.from(generateCsvChunks());

    await new Promise<void>((resolve, reject) => {
      stream.on('error', (err) => {
        if (!res.headersSent) {
          res
            .status(500)
            .json({ statusCode: 500, message: 'Export streaming error' });
        }
        reject(err);
      });

      res.on('finish', () => resolve());
      res.on('close', () => {
        stream.destroy();
        resolve();
      });

      stream.pipe(res);
    });
  }
}
