import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MediaService } from '../gallery/media.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import {
  PaginationQueryDto,
  SortOrder,
} from '../../common/dto/pagination-query.dto';
import { Prisma } from '../../generated/prisma';

export interface HotelUploadFiles {
  coverImage?: Express.Multer.File[];
  images?: Express.Multer.File[];
}

@Injectable()
export class HotelService {
  private readonly logger = new Logger(HotelService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mediaService: MediaService,
  ) {}

  /**
   * Create a new HotelRecommend with optional single cover image and bulk gallery images.
   * Uses Prisma nested writes to insert the main record and child HotelImage records in a single transaction.
   */
  async create(dto: CreateHotelDto, files?: HotelUploadFiles) {
    let coverImageUrl = dto.coverImage?.trim() || null;
    const galleryImageUrls: string[] = [];
    const newlyCreatedFiles: string[] = [];

    try {
      // 1. Process single cover image if uploaded
      if (files?.coverImage && files.coverImage.length > 0) {
        const processedCover = await this.mediaService.processAndSave(
          files.coverImage[0],
        );
        coverImageUrl = processedCover.mediaUrl;
        newlyCreatedFiles.push(processedCover.mediaUrl);
      }

      // 2. Process bulk gallery images if uploaded
      if (files?.images && files.images.length > 0) {
        for (const file of files.images) {
          const processed = await this.mediaService.processAndSave(file);
          galleryImageUrls.push(processed.mediaUrl);
          newlyCreatedFiles.push(processed.mediaUrl);
        }
      }

      // Also include any explicit imageUrls provided in DTO
      if (dto.imageUrls && Array.isArray(dto.imageUrls)) {
        galleryImageUrls.push(...dto.imageUrls.filter(Boolean));
      }

      // 3. Prisma nested write
      const data: Prisma.HotelRecommendCreateInput = {
        name: dto.name,
        address: dto.address,
        description: dto.description?.trim() || null,
        starRating: dto.starRating ?? 0,
        contactInfo: dto.contactInfo?.trim() || null,
        coverImage: coverImageUrl,
        websiteUrl: dto.websiteUrl?.trim() || null,
        mapUrl: dto.mapUrl?.trim() || null,
        images:
          galleryImageUrls.length > 0
            ? {
                create: galleryImageUrls.map((imageUrl, index) => ({
                  imageUrl,
                  order: index,
                })),
              }
            : undefined,
      };

      const hotel = await this.prisma.hotelRecommend.create({
        data,
        include: { images: { orderBy: { order: 'asc' } } },
      });

      this.logger.log(`Hotel recommendation created with ID: ${hotel.id}`);
      return hotel;
    } catch (error: unknown) {
      this.logger.error(
        `Failed to create hotel recommendation. Cleaning up uploaded files.`,
        (error as Error).stack,
      );
      // Clean up newly uploaded files if creation failed
      for (const fileUrl of newlyCreatedFiles) {
        await this.mediaService.deleteFileByUrl(fileUrl);
      }
      throw error;
    }
  }

  /**
   * Find paginated list of hotels with search, sorting, and related gallery images.
   */
  async findAll(query: PaginationQueryDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const { search, sortBy = 'createdAt', sortOrder = SortOrder.DESC } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.HotelRecommendWhereInput = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { address: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.hotelRecommend.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: { images: { orderBy: { order: 'asc' } } },
      }),
      this.prisma.hotelRecommend.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  /**
   * Find single hotel recommendation by ID, including related gallery images.
   */
  async findOne(id: string) {
    const hotel = await this.prisma.hotelRecommend.findUnique({
      where: { id },
      include: { images: { orderBy: { order: 'asc' } } },
    });
    if (!hotel) {
      throw new NotFoundException(`Hotel recommendation with ID "${id}" not found`);
    }
    return hotel;
  }

  /**
   * Update hotel recommendation with optional cover image replacement, new gallery images,
   * image deletions, and replace vs append logic.
   */
  async update(id: string, dto: UpdateHotelDto, files?: HotelUploadFiles) {
    const existingHotel = await this.findOne(id);

    let newCoverImageUrl = dto.coverImage !== undefined ? dto.coverImage : undefined;
    const newGalleryImageUrls: string[] = [];
    const newlyCreatedFiles: string[] = [];

    try {
      // 1. Process new cover image file if uploaded
      if (files?.coverImage && files.coverImage.length > 0) {
        const processedCover = await this.mediaService.processAndSave(
          files.coverImage[0],
        );
        newCoverImageUrl = processedCover.mediaUrl;
        newlyCreatedFiles.push(processedCover.mediaUrl);
      }

      // 2. Process bulk gallery images if uploaded
      if (files?.images && files.images.length > 0) {
        for (const file of files.images) {
          const processed = await this.mediaService.processAndSave(file);
          newGalleryImageUrls.push(processed.mediaUrl);
          newlyCreatedFiles.push(processed.mediaUrl);
        }
      }

      // Also include any explicit imageUrls provided in DTO
      if (dto.imageUrls && Array.isArray(dto.imageUrls)) {
        newGalleryImageUrls.push(...dto.imageUrls.filter(Boolean));
      }

      return await this.prisma.$transaction(async (tx) => {
        // A. If cover image is updated/replaced, clean up previous file
        if (
          newCoverImageUrl !== undefined &&
          existingHotel.coverImage &&
          existingHotel.coverImage !== newCoverImageUrl
        ) {
          await this.mediaService.deleteFileByUrl(existingHotel.coverImage);
        }

        // B. Handle deletedImageIds if provided
        if (dto.deletedImageIds && dto.deletedImageIds.length > 0) {
          const imagesToDelete = await tx.hotelImage.findMany({
            where: {
              id: { in: dto.deletedImageIds },
              hotelId: id,
            },
          });

          for (const img of imagesToDelete) {
            await this.mediaService.deleteFileByUrl(img.imageUrl);
          }

          await tx.hotelImage.deleteMany({
            where: {
              id: { in: dto.deletedImageIds },
              hotelId: id,
            },
          });
        }

        // C. Handle replaceImages vs append logic
        if (dto.replaceImages) {
          // Delete all existing gallery images
          const allExistingImages = await tx.hotelImage.findMany({
            where: { hotelId: id },
          });

          for (const img of allExistingImages) {
            await this.mediaService.deleteFileByUrl(img.imageUrl);
          }

          await tx.hotelImage.deleteMany({
            where: { hotelId: id },
          });

          // Insert newly provided gallery images
          if (newGalleryImageUrls.length > 0) {
            await tx.hotelImage.createMany({
              data: newGalleryImageUrls.map((imageUrl, index) => ({
                hotelId: id,
                imageUrl,
                order: index,
              })),
            });
          }
        } else if (newGalleryImageUrls.length > 0) {
          // Append new gallery images with continuous order
          const currentMaxOrder = await tx.hotelImage.aggregate({
            where: { hotelId: id },
            _max: { order: true },
          });
          const startOrder = (currentMaxOrder._max.order ?? -1) + 1;

          await tx.hotelImage.createMany({
            data: newGalleryImageUrls.map((imageUrl, index) => ({
              hotelId: id,
              imageUrl,
              order: startOrder + index,
            })),
          });
        }

        // D. Update main hotel record
        const data: Prisma.HotelRecommendUpdateInput = {
          ...(dto.name !== undefined ? { name: dto.name } : {}),
          ...(dto.address !== undefined ? { address: dto.address } : {}),
          ...(dto.description !== undefined
            ? { description: dto.description?.trim() || null }
            : {}),
          ...(dto.starRating !== undefined
            ? { starRating: dto.starRating }
            : {}),
          ...(dto.contactInfo !== undefined
            ? { contactInfo: dto.contactInfo?.trim() || null }
            : {}),
          ...(newCoverImageUrl !== undefined
            ? { coverImage: newCoverImageUrl }
            : {}),
          ...(dto.websiteUrl !== undefined
            ? { websiteUrl: dto.websiteUrl?.trim() || null }
            : {}),
          ...(dto.mapUrl !== undefined
            ? { mapUrl: dto.mapUrl?.trim() || null }
            : {}),
        };

        return tx.hotelRecommend.update({
          where: { id },
          data,
          include: { images: { orderBy: { order: 'asc' } } },
        });
      });
    } catch (error: unknown) {
      this.logger.error(
        `Failed to update hotel ${id}. Cleaning up newly created files.`,
        (error as Error).stack,
      );
      for (const fileUrl of newlyCreatedFiles) {
        await this.mediaService.deleteFileByUrl(fileUrl);
      }
      throw error;
    }
  }

  /**
   * Delete hotel recommendation and clean up all associated physical media files.
   */
  async remove(id: string) {
    const hotel = await this.findOne(id);

    // Delete cover image physical file
    if (hotel.coverImage) {
      await this.mediaService.deleteFileByUrl(hotel.coverImage);
    }

    // Delete all gallery images physical files
    if (hotel.images && hotel.images.length > 0) {
      for (const img of hotel.images) {
        await this.mediaService.deleteFileByUrl(img.imageUrl);
      }
    }

    const deleted = await this.prisma.hotelRecommend.delete({
      where: { id },
      include: { images: true },
    });

    this.logger.log(`Deleted hotel recommendation: ${id}`);
    return deleted;
  }

  /**
   * Append additional gallery images to an existing hotel recommendation.
   */
  async addImages(
    id: string,
    files?: Express.Multer.File[],
    imageUrls?: string[],
  ) {
    await this.findOne(id);
    const urlsToAdd: string[] = [];
    const newlyCreatedFiles: string[] = [];

    try {
      if (files && files.length > 0) {
        for (const file of files) {
          const processed = await this.mediaService.processAndSave(file);
          urlsToAdd.push(processed.mediaUrl);
          newlyCreatedFiles.push(processed.mediaUrl);
        }
      }

      if (imageUrls && Array.isArray(imageUrls)) {
        urlsToAdd.push(...imageUrls.filter(Boolean));
      }

      if (urlsToAdd.length === 0) {
        throw new BadRequestException('No images provided to upload');
      }

      const currentMaxOrder = await this.prisma.hotelImage.aggregate({
        where: { hotelId: id },
        _max: { order: true },
      });
      const startOrder = (currentMaxOrder._max.order ?? -1) + 1;

      await this.prisma.hotelImage.createMany({
        data: urlsToAdd.map((imageUrl, index) => ({
          hotelId: id,
          imageUrl,
          order: startOrder + index,
        })),
      });

      return this.findOne(id);
    } catch (error: unknown) {
      for (const fileUrl of newlyCreatedFiles) {
        await this.mediaService.deleteFileByUrl(fileUrl);
      }
      throw error;
    }
  }

  /**
   * Delete a single gallery image from a hotel recommendation.
   */
  async deleteImage(hotelId: string, imageId: string) {
    const image = await this.prisma.hotelImage.findFirst({
      where: { id: imageId, hotelId },
    });

    if (!image) {
      throw new NotFoundException(
        `HotelImage with ID "${imageId}" not found for hotel "${hotelId}"`,
      );
    }

    await this.mediaService.deleteFileByUrl(image.imageUrl);
    await this.prisma.hotelImage.delete({ where: { id: imageId } });

    return {
      success: true,
      message: 'Hotel gallery image deleted successfully',
    };
  }
}
