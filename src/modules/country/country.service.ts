import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import {
  PaginationQueryDto,
  SortOrder,
} from '../../common/dto/pagination-query.dto';
import { Prisma } from '../../generated/prisma';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCountryDto) {
    const exists = await this.prisma.country.findFirst({
      where: { OR: [{ name: dto.name }, { code: dto.code }] },
    });
    if (exists)
      throw new ConflictException('Country name or code already exists');
    return this.prisma.country.create({ data: dto });
  }

  async findAll(query: PaginationQueryDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const { search, sortBy = 'createdAt', sortOrder = SortOrder.DESC } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.CountryWhereInput = search
      ? { name: { contains: search, mode: 'insensitive' } }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.country.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: { _count: { select: { delegations: true } } },
      }),
      this.prisma.country.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOne(id: string) {
    const country = await this.prisma.country.findUnique({
      where: { id },
      include: { _count: { select: { delegations: true } } },
    });
    if (!country) throw new NotFoundException('Country not found');
    return country;
  }

  async update(id: string, dto: UpdateCountryDto) {
    await this.findOne(id);
    return this.prisma.country.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    const country = await this.findOne(id);
    if (country._count.delegations > 0) {
      throw new ConflictException(
        'Cannot delete country with associated delegations',
      );
    }
    return this.prisma.country.delete({ where: { id } });
  }
}
