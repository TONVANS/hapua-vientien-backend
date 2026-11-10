import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { DelegationService } from '../modules/delegation/delegation.service';
import { CreateDelegationDto } from '../modules/delegation/dto/create-delegation.dto';
import { UpdateDelegationDto } from '../modules/delegation/dto/update-delegation.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../generated/prisma';

@ApiTags('Admin - Delegation')
@ApiBearerAuth()
@Controller('admin/delegations')
@Roles(Role.ADMIN)
export class AdminDelegationController {
  constructor(private readonly delegationService: DelegationService) {}

  @Post()
  create(@Body() createDelegationDto: CreateDelegationDto) {
    return this.delegationService.create(createDelegationDto);
  }

  @Get()
  findAll(
    @Query()
    query: PaginationQueryDto & { countryId?: string; organizationId?: string },
  ) {
    return this.delegationService.findAll(query);
  }

  @Get('export')
  async export(
    @Res() res: Response,
    @Query('search') search?: string,
    @Query('countryId') countryId?: string,
    @Query('organizationId') organizationId?: string,
  ) {
    return this.delegationService.exportDelegationsStream(res, {
      search,
      countryId,
      organizationId,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delegationService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDelegationDto: UpdateDelegationDto,
  ) {
    return this.delegationService.update(id, updateDelegationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delegationService.remove(id);
  }
}
