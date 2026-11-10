import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import {
  PaginationQueryDto,
  SortOrder,
} from '../../common/dto/pagination-query.dto';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrganizationDto) {
    const exists = await this.prisma.organization.findUnique({
      where: { name: dto.name },
    });
    if (exists) throw new ConflictException('Organization name already exists');
    return this.prisma.organization.create({ data: dto });
  }

  async findAll(query: PaginationQueryDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const { search, sortBy = 'createdAt', sortOrder = SortOrder.DESC } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.OrganizationWhereInput = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { shortName: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.organization.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: { _count: { select: { delegations: true } } },
      }),
      this.prisma.organization.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: string) {
    const org = await this.prisma.organization.findUnique({
      where: { id },
      include: { _count: { select: { delegations: true } } },
    });
    if (!org) throw new NotFoundException('Organization not found');
    return org;
  }

  async update(id: string, dto: UpdateOrganizationDto) {
    await this.findOne(id);
    return this.prisma.organization.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    const org = await this.findOne(id);
    if (org._count.delegations > 0) {
      throw new ConflictException(
        'Cannot delete organization with associated delegations',
      );
    }
    return this.prisma.organization.delete({ where: { id } });
  }
}
