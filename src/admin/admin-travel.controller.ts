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
  UploadedFiles,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiConsumes,
  ApiBody,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { TravelService } from '../modules/travel/travel.service';
import { CreateTravelDto } from '../modules/travel/dto/create-travel.dto';
import { UpdateTravelDto } from '../modules/travel/dto/update-travel.dto';
import { UploadTravelImagesDto } from '../modules/travel/dto/upload-travel-images.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../generated/prisma';
import { imageUploadMulterOptions } from '../common/multer/image-upload.multer';

@ApiTags('Admin - Travel')
@ApiBearerAuth()
@Controller('admin/travel')
@Roles(Role.ADMIN)
export class AdminTravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'coverImage', maxCount: 1 },
        { name: 'images', maxCount: 20 },
      ],
      imageUploadMulterOptions,
    ),
  )
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiOperation({
    summary:
      'Create travel recommendation with optional cover image and gallery images upload',
    description:
      'Creates a new travel recommendation record. Automatically handles single file upload for "coverImage" and multiple file uploads for gallery "images", saving them to external storage and linking via Prisma nested writes.',
  })
  @ApiBody({
    description:
      'Travel attraction data with optional single coverImage and multiple gallery images',
    schema: {
      type: 'object',
      required: ['placeName', 'location'],
      properties: {
        placeName: { type: 'string', example: 'Kuang Si Waterfalls' },
        description: {
          type: 'string',
          example:
            'Three-tiered turquoise waterfall complex featuring travertine cascade pools.',
        },
        location: {
          type: 'string',
          example: 'About 25 km southeast of Vientiane',
        },
        openTime: { type: 'string', example: '08:00' },
        closeTime: { type: 'string', example: '17:30' },
        openDays: {
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'MONDAY',
              'TUESDAY',
              'WEDNESDAY',
              'THURSDAY',
              'FRIDAY',
              'SATURDAY',
              'SUNDAY',
            ],
          },
          example: [
            'MONDAY',
            'TUESDAY',
            'WEDNESDAY',
            'THURSDAY',
            'FRIDAY',
            'SATURDAY',
            'SUNDAY',
          ],
        },
        mapUrl: {
          type: 'string',
          example: 'https://maps.google.com/?q=Kuang+Si+Waterfall',
        },
        coverImage: {
          type: 'string',
          format: 'binary',
          description:
            'Single image file for travel cover (JPEG, PNG, WEBP, etc.)',
        },
        images: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description:
            'Bulk gallery image files to be attached to TravelImage model',
        },
        imageUrls: {
          type: 'array',
          items: { type: 'string' },
          description:
            'Optional pre-existing image URLs to attach to travel gallery',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description:
      'Travel recommendation created successfully (includes gallery images).',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Validation error or invalid file type.',
  })
  create(
    @Body() createTravelDto: CreateTravelDto,
    @UploadedFiles()
    files?: {
      coverImage?: Express.Multer.File[];
      images?: Express.Multer.File[];
    },
  ) {
    return this.travelService.create(createTravelDto, files);
  }

  @Get()
  @ApiOperation({
    summary:
      'Get paginated list of travel recommendations (includes gallery images)',
  })
  @ApiResponse({
    status: 200,
    description:
      'List of travel recommendations with nested gallery images.',
  })
  findAll(@Query() query: PaginationQueryDto) {
    return this.travelService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary:
      'Get single travel recommendation details by ID (includes gallery images)',
  })
  @ApiParam({ name: 'id', description: 'Travel recommendation UUID' })
  @ApiResponse({
    status: 200,
    description:
      'Travel recommendation details with nested gallery images.',
  })
  @ApiResponse({ status: 404, description: 'Travel record not found.' })
  findOne(@Param('id') id: string) {
    return this.travelService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'coverImage', maxCount: 1 },
        { name: 'images', maxCount: 20 },
      ],
      imageUploadMulterOptions,
    ),
  )
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiOperation({
    summary:
      'Update travel recommendation with optional new coverImage or gallery images',
    description:
      'Updates travel recommendation record. Allows replacing cover image, appending or replacing gallery images, or removing specific image IDs.',
  })
  @ApiParam({ name: 'id', description: 'Travel recommendation UUID' })
  @ApiBody({
    description: 'Travel update fields and optional file uploads',
    schema: {
      type: 'object',
      properties: {
        placeName: { type: 'string' },
        description: { type: 'string' },
        location: { type: 'string' },
        openTime: { type: 'string' },
        closeTime: { type: 'string' },
        openDays: {
          type: 'array',
          items: {
            type: 'string',
            enum: [
              'MONDAY',
              'TUESDAY',
              'WEDNESDAY',
              'THURSDAY',
              'FRIDAY',
              'SATURDAY',
              'SUNDAY',
            ],
          },
        },
        mapUrl: { type: 'string' },
        coverImage: {
          type: 'string',
          format: 'binary',
          description:
            'Single image file to update/replace travel attraction cover',
        },
        images: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Bulk gallery image files to append or replace',
        },
        deletedImageIds: {
          type: 'array',
          items: { type: 'string' },
          description:
            'IDs of existing gallery images to delete from storage and DB',
        },
        replaceImages: {
          type: 'boolean',
          description:
            'If true, replaces all existing gallery images with newly provided ones; otherwise appends.',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Travel recommendation updated successfully.',
  })
  @ApiResponse({ status: 404, description: 'Travel record not found.' })
  update(
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateTravelDto,
    @UploadedFiles()
    files?: {
      coverImage?: Express.Multer.File[];
      images?: Express.Multer.File[];
    },
  ) {
    return this.travelService.update(id, updateTravelDto, files);
  }

  @Delete(':id')
  @ApiOperation({
    summary:
      'Delete travel recommendation and its associated cover and gallery image files',
  })
  @ApiParam({ name: 'id', description: 'Travel recommendation UUID' })
  @ApiResponse({
    status: 200,
    description:
      'Travel recommendation and associated physical files deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Travel record not found.' })
  remove(@Param('id') id: string) {
    return this.travelService.remove(id);
  }

  @Post(':id/images')
  @UseInterceptors(FilesInterceptor('images', 20, imageUploadMulterOptions))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary:
      'Upload additional gallery images to an existing travel recommendation',
  })
  @ApiParam({ name: 'id', description: 'Travel recommendation UUID' })
  @ApiBody({
    description: 'Bulk images to append to travel recommendation gallery',
    schema: {
      type: 'object',
      properties: {
        images: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description: 'Image files to add to gallery',
        },
        imageUrls: {
          type: 'array',
          items: { type: 'string' },
          description: 'Pre-existing image URLs to add to gallery',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description:
      'Images uploaded and attached to travel recommendation gallery.',
  })
  uploadImages(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body?: UploadTravelImagesDto,
  ) {
    return this.travelService.addImages(id, files, body?.imageUrls);
  }

  @Delete(':id/images/:imageId')
  @ApiOperation({
    summary:
      'Delete a single gallery image from a travel recommendation',
  })
  @ApiParam({ name: 'id', description: 'Travel recommendation UUID' })
  @ApiParam({ name: 'imageId', description: 'TravelImage UUID' })
  @ApiResponse({
    status: 200,
    description:
      'Travel gallery image record and physical file deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Image or Travel record not found.' })
  deleteImage(@Param('id') id: string, @Param('imageId') imageId: string) {
    return this.travelService.deleteImage(id, imageId);
  }
}
