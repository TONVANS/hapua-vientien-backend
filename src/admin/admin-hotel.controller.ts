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
import { HotelService } from '../modules/hotel/hotel.service';
import { CreateHotelDto } from '../modules/hotel/dto/create-hotel.dto';
import { UpdateHotelDto } from '../modules/hotel/dto/update-hotel.dto';
import { UploadHotelImagesDto } from '../modules/hotel/dto/upload-hotel-images.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../generated/prisma';
import { imageUploadMulterOptions } from '../common/multer/image-upload.multer';

@ApiTags('Admin - Hotel')
@ApiBearerAuth()
@Controller('admin/hotels')
@Roles(Role.ADMIN)
export class AdminHotelController {
  constructor(private readonly hotelService: HotelService) {}

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
      'Create hotel recommendation with optional cover image and gallery images upload',
    description:
      'Creates a new hotel recommendation record. Automatically handles single file upload for "coverImage" and multiple file uploads for gallery "images", saving them to external storage and linking via Prisma nested writes.',
  })
  @ApiBody({
    description:
      'Hotel data with optional single coverImage and multiple gallery images',
    schema: {
      type: 'object',
      required: ['name', 'address'],
      properties: {
        name: { type: 'string', example: 'Landmark Mekong Riverside Hotel' },
        address: {
          type: 'string',
          example: 'Thadeua Road, Vientiane Capital, Lao PDR',
        },
        description: {
          type: 'string',
          example:
            'Exclusive 5-star luxury resort set in historic French colonial grounds.',
        },
        starRating: { type: 'number', example: 5, default: 0 },
        contactInfo: {
          type: 'string',
          example: '+856 71 860 333 | reservations@amantaka.com',
        },
        websiteUrl: {
          type: 'string',
          example: 'https://www.aman.com/resorts/amantaka',
        },
        mapUrl: {
          type: 'string',
          example: 'https://maps.google.com/?q=Landmark+Mekong+Riverside+Hotel+Vientiane',
        },
        coverImage: {
          type: 'string',
          format: 'binary',
          description:
            'Single image file for hotel cover (JPEG, PNG, WEBP, etc.)',
        },
        images: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
          description:
            'Bulk gallery image files to be attached to HotelImage model',
        },
        imageUrls: {
          type: 'array',
          items: { type: 'string' },
          description:
            'Optional pre-existing image URLs to attach to hotel gallery',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description:
      'Hotel recommendation created successfully (includes gallery images).',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Validation error or invalid file type.',
  })
  create(
    @Body() createHotelDto: CreateHotelDto,
    @UploadedFiles()
    files?: {
      coverImage?: Express.Multer.File[];
      images?: Express.Multer.File[];
    },
  ) {
    return this.hotelService.create(createHotelDto, files);
  }

  @Get()
  @ApiOperation({
    summary:
      'Get paginated list of hotel recommendations (includes gallery images)',
  })
  @ApiResponse({
    status: 200,
    description: 'List of hotel recommendations with nested gallery images.',
  })
  findAll(@Query() query: PaginationQueryDto) {
    return this.hotelService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get single hotel recommendation details by ID (includes gallery images)',
  })
  @ApiParam({ name: 'id', description: 'Hotel UUID' })
  @ApiResponse({
    status: 200,
    description: 'Hotel recommendation details with nested gallery images.',
  })
  @ApiResponse({ status: 404, description: 'Hotel not found.' })
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(id);
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
      'Update hotel recommendation with optional new coverImage or gallery images',
    description:
      'Updates hotel record. Allows replacing cover image, appending or replacing gallery images, or removing specific image IDs.',
  })
  @ApiParam({ name: 'id', description: 'Hotel UUID' })
  @ApiBody({
    description: 'Hotel update fields and optional file uploads',
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        address: { type: 'string' },
        description: { type: 'string' },
        starRating: { type: 'number' },
        contactInfo: { type: 'string' },
        websiteUrl: { type: 'string' },
        mapUrl: { type: 'string' },
        coverImage: {
          type: 'string',
          format: 'binary',
          description: 'Single image file to update/replace hotel cover',
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
          description: 'IDs of existing gallery images to delete from storage and DB',
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
    description: 'Hotel recommendation updated successfully.',
  })
  @ApiResponse({ status: 404, description: 'Hotel not found.' })
  update(
    @Param('id') id: string,
    @Body() updateHotelDto: UpdateHotelDto,
    @UploadedFiles()
    files?: {
      coverImage?: Express.Multer.File[];
      images?: Express.Multer.File[];
    },
  ) {
    return this.hotelService.update(id, updateHotelDto, files);
  }

  @Delete(':id')
  @ApiOperation({
    summary:
      'Delete hotel recommendation and its associated cover and gallery image files',
  })
  @ApiParam({ name: 'id', description: 'Hotel UUID' })
  @ApiResponse({
    status: 200,
    description:
      'Hotel recommendation and associated physical files deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Hotel not found.' })
  remove(@Param('id') id: string) {
    return this.hotelService.remove(id);
  }

  @Post(':id/images')
  @UseInterceptors(FilesInterceptor('images', 20, imageUploadMulterOptions))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({
    summary: 'Upload additional gallery images to an existing hotel',
  })
  @ApiParam({ name: 'id', description: 'Hotel UUID' })
  @ApiBody({
    description: 'Bulk images to append to hotel gallery',
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
    description: 'Images uploaded and attached to hotel gallery.',
  })
  uploadImages(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body?: UploadHotelImagesDto,
  ) {
    return this.hotelService.addImages(id, files, body?.imageUrls);
  }

  @Delete(':id/images/:imageId')
  @ApiOperation({
    summary: 'Delete a single gallery image from a hotel recommendation',
  })
  @ApiParam({ name: 'id', description: 'Hotel UUID' })
  @ApiParam({ name: 'imageId', description: 'HotelImage UUID' })
  @ApiResponse({
    status: 200,
    description:
      'Hotel gallery image record and physical file deleted successfully.',
  })
  @ApiResponse({ status: 404, description: 'Image or Hotel not found.' })
  deleteImage(@Param('id') id: string, @Param('imageId') imageId: string) {
    return this.hotelService.deleteImage(id, imageId);
  }
}
