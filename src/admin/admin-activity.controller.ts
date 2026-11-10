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
} from '@nestjs/common';
import { ActivityService } from '../modules/activity/activity.service';
import { CreateActivityDto } from '../modules/activity/dto/create-activity.dto';
import { UpdateActivityDto } from '../modules/activity/dto/update-activity.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role, ActivityStatus } from '../generated/prisma';

@ApiTags('Admin - Activity')
@ApiBearerAuth()
@Controller('admin/activities')
@Roles(Role.ADMIN)
export class AdminActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto) {
    return this.activityService.create(createActivityDto);
  }

  @Get()
  findAll(
    @Query()
    query: PaginationQueryDto & { status?: ActivityStatus; roomId?: string },
  ) {
    return this.activityService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    return this.activityService.update(id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityService.remove(id);
  }
}
