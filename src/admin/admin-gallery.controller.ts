import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { GalleryService } from '../modules/gallery/gallery.service';
import { CreateGalleryDto } from '../modules/gallery/dto/create-gallery.dto';
import { UpdateGalleryDto } from '../modules/gallery/dto/update-gallery.dto';
import { UploadGalleryDto } from '../modules/gallery/dto/upload-gallery.dto';
import { GalleryResponseDto } from '../modules/gallery/dto/gallery-response.dto';
import { galleryMulterOptions } from '../modules/gallery/multer.config';
import { Roles } from '../common/decorators/roles.decorator';
import { Role, Visibility } from '../generated/prisma';

@ApiTags('Admin - Gallery')
@ApiBearerAuth()
@Controller('admin/gallery')
@Roles(Role.ADMIN)
export class AdminGalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', galleryMulterOptions))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary:
      'Upload and convert media (Image to WebP / Video to WebM) for Gallery',
    description:
      'Uploads an image or video file with metadata. Automatically compresses and converts images to .webp (via Sharp) and videos to .webm (via FFmpeg), stores them on disk, and creates a database record.',
  })
  @ApiBody({
    description: 'Media file and gallery metadata payload',
    schema: {
      type: 'object',
      required: ['file', 'activityId'],
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          description:
            'Media file to upload (Supported images: JPEG, PNG, WEBP, GIF, SVG | Supported videos: MP4, WEBM, MOV, MKV, AVI)',
        },
        activityId: {
          type: 'string',
          format: 'uuid',
          description: 'UUID of the related Activity',
          example: '123e4567-e89b-12d3-a456-426614174000',
        },
        title: {
          type: 'string',
          description: 'Title of the gallery item',
          example: 'Opening Ceremony',
        },
        description: {
          type: 'string',
          description: 'Description or caption of the gallery item',
          example:
            'Keynote presentation delivered during the morning plenary session.',
        },
        visibility: {
          type: 'string',
          enum: ['PUBLIC', 'PRIVATE'],
          default: 'PUBLIC',
          description: 'Access visibility for this media item',
          example: 'PUBLIC',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Media uploaded, converted, and saved successfully.',
    type: GalleryResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Unsupported file type or validation error',
  })
  @ApiResponse({ status: 404, description: 'Not Found - Activity not found' })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error - Media conversion failed',
  })
  uploadMedia(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadGalleryDto: UploadGalleryDto,
  ) {
    return this.galleryService.uploadAndCreate(file, uploadGalleryDto);
  }

  @Post()
  @ApiOperation({
    summary: 'Create gallery item record with existing media URL',
  })
  @ApiResponse({
    status: 201,
    description: 'Gallery item created successfully',
    type: GalleryResponseDto,
  })
  create(@Body() createGalleryDto: CreateGalleryDto) {
    return this.galleryService.create(createGalleryDto);
  }

  @Post('bulk/:activityId')
  @ApiOperation({ summary: 'Bulk create gallery records for an activity' })
  @ApiParam({ name: 'activityId', description: 'Activity UUID' })
  bulkCreate(
    @Param('activityId') activityId: string,
    @Body() dtos: CreateGalleryDto[],
  ) {
    return this.galleryService.bulkCreate(activityId, dtos);
  }

  @Get('activity/:activityId')
  @ApiOperation({ summary: 'Get all gallery items for a specific activity' })
  @ApiParam({ name: 'activityId', description: 'Activity UUID' })
  @ApiQuery({ name: 'visibility', enum: Visibility, required: false })
  @ApiResponse({
    status: 200,
    description: 'List of gallery items',
    type: [GalleryResponseDto],
  })
  findByActivity(
    @Param('activityId') activityId: string,
    @Query('visibility') visibility?: Visibility,
  ) {
    return this.galleryService.findByActivity(activityId, visibility);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get single gallery item by ID' })
  @ApiParam({ name: 'id', description: 'Gallery item UUID' })
  @ApiResponse({
    status: 200,
    description: 'Gallery item details',
    type: GalleryResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Gallery item not found' })
  findOne(@Param('id') id: string) {
    return this.galleryService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update gallery item metadata' })
  @ApiParam({ name: 'id', description: 'Gallery item UUID' })
  @ApiResponse({
    status: 200,
    description: 'Gallery item updated successfully',
    type: GalleryResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Gallery item not found' })
  update(@Param('id') id: string, @Body() updateGalleryDto: UpdateGalleryDto) {
    return this.galleryService.update(id, updateGalleryDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete gallery item and associated file from storage',
  })
  @ApiParam({ name: 'id', description: 'Gallery item UUID' })
  @ApiResponse({
    status: 200,
    description: 'Gallery item deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Gallery item not found' })
  remove(@Param('id') id: string) {
    return this.galleryService.remove(id);
  }
}
