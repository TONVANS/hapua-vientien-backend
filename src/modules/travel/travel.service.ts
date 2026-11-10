import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MediaService } from '../gallery/media.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import {
  PaginationQueryDto,
  SortOrder,
} from '../../common/dto/pagination-query.dto';
import { Prisma } from '../../generated/prisma';

export interface TravelUploadFiles {
  coverImage?: Express.Multer.File[];
  images?: Express.Multer.File[];
}

@Injectable()
export class TravelService {
  private readonly logger = new Logger(TravelService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mediaService: MediaService,
  ) {}

  /**
   * Parse input time string or Date object into valid Date for Prisma @db.Time
   */
  private parseTime(timeInput?: string | Date | null): Date | undefined {
    if (!timeInput) return undefined;
    if (timeInput instanceof Date) return timeInput;
    if (typeof timeInput === 'string') {
      const trimmed = timeInput.trim();
      if (!trimmed) return undefined;
      if (trimmed.includes('T')) {
        return new Date(trimmed);
      }
      // e.g. "08:00" -> "1970-01-01T08:00:00Z"
      const parts = trimmed.split(':');
      if (parts.length >= 2) {
        const hh = parts[0].padStart(2, '0');
        const mm = parts[1].padStart(2, '0');
        const ss = (parts[2] || '00').padStart(2, '0');
        return new Date(`1970-01-01T${hh}:${mm}:${ss}Z`);
      }
    }
    return undefined;
  }

  /**
   * Create a new TravelRecommend with optional single cover image and bulk gallery images.
   * Uses Prisma nested writes to insert the main record and child TravelImage records in a single transaction.
   */
  async create(dto: CreateTravelDto, files?: TravelUploadFiles) {
    let coverImageUrl = dto.coverImage?.trim() || null;
    const galleryImageUrls: string[] = [];
    const newlyCreatedFiles: string[] = [];

    try {
      // 1. Process single cover image file if uploaded
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
      const data: Prisma.TravelRecommendCreateInput = {
        placeName: dto.placeName,
        description: dto.description?.trim() || null,
        location: dto.location,
        openTime: this.parseTime(dto.openTime),
        closeTime: this.parseTime(dto.closeTime),
        openDays: dto.openDays || [],
        mapUrl: dto.mapUrl?.trim() || null,
        coverImage: coverImageUrl,
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

      const travel = await this.prisma.travelRecommend.create({
        data,
        include: { images: { orderBy: { order: 'asc' } } },
      });

      this.logger.log(`Travel recommendation created with ID: ${travel.id}`);
      return travel;
    } catch (error: unknown) {
      this.logger.error(
        `Failed to create travel recommendation. Cleaning up uploaded files.`,
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
   * Find paginated list of travel recommendations with search, sorting, and gallery images.
   */
  async findAll(query: PaginationQueryDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const { search, sortBy = 'createdAt', sortOrder = SortOrder.DESC } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.TravelRecommendWhereInput = search
      ? {
          OR: [
            { placeName: { contains: search, mode: 'insensitive' } },
            { location: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.prisma.travelRecommend.findMany({
        where,
        skip,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: { images: { orderBy: { order: 'asc' } } },
      }),
      this.prisma.travelRecommend.count({ where }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  /**
   * Find single travel recommendation by ID, including related gallery images.
   */
  async findOne(id: string) {
    const travel = await this.prisma.travelRecommend.findUnique({
      where: { id },
      include: { images: { orderBy: { order: 'asc' } } },
    });
    if (!travel) {
      throw new NotFoundException(
        `Travel recommendation with ID "${id}" not found`,
      );
    }
    return travel;
  }

  /**
   * Update travel recommendation with optional cover image replacement, new gallery images,
   * image deletions, and replace vs append logic.
   */
  async update(id: string, dto: UpdateTravelDto, files?: TravelUploadFiles) {
    const existingTravel = await this.findOne(id);

    let newCoverImageUrl =
      dto.coverImage !== undefined ? dto.coverImage : undefined;
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
        // A. If cover image changed, clean up previous physical file
        if (
          newCoverImageUrl !== undefined &&
          existingTravel.coverImage &&
          existingTravel.coverImage !== newCoverImageUrl
        ) {
          await this.mediaService.deleteFileByUrl(existingTravel.coverImage);
        }

        // B. Handle deletedImageIds if provided
        if (dto.deletedImageIds && dto.deletedImageIds.length > 0) {
          const imagesToDelete = await tx.travelImage.findMany({
            where: {
              id: { in: dto.deletedImageIds },
              travelId: id,
            },
          });

          for (const img of imagesToDelete) {
            await this.mediaService.deleteFileByUrl(img.imageUrl);
          }

          await tx.travelImage.deleteMany({
            where: {
              id: { in: dto.deletedImageIds },
              travelId: id,
            },
          });
        }

        // C. Handle replaceImages vs append logic
        if (dto.replaceImages) {
          // Delete all existing gallery images
          const allExistingImages = await tx.travelImage.findMany({
            where: { travelId: id },
          });

          for (const img of allExistingImages) {
            await this.mediaService.deleteFileByUrl(img.imageUrl);
          }

          await tx.travelImage.deleteMany({
            where: { travelId: id },
          });

          // Insert newly provided gallery images
          if (newGalleryImageUrls.length > 0) {
            await tx.travelImage.createMany({
              data: newGalleryImageUrls.map((imageUrl, index) => ({
                travelId: id,
                imageUrl,
                order: index,
              })),
            });
          }
        } else if (newGalleryImageUrls.length > 0) {
          // Append new gallery images with continuous order
          const currentMaxOrder = await tx.travelImage.aggregate({
            where: { travelId: id },
            _max: { order: true },
          });
          const startOrder = (currentMaxOrder._max.order ?? -1) + 1;

          await tx.travelImage.createMany({
            data: newGalleryImageUrls.map((imageUrl, index) => ({
              travelId: id,
              imageUrl,
              order: startOrder + index,
            })),
          });
        }

        // D. Update main travel record
        const data: Prisma.TravelRecommendUpdateInput = {
          ...(dto.placeName !== undefined ? { placeName: dto.placeName } : {}),
          ...(dto.description !== undefined
            ? { description: dto.description?.trim() || null }
            : {}),
          ...(dto.location !== undefined ? { location: dto.location } : {}),
          ...(dto.openTime !== undefined
            ? { openTime: this.parseTime(dto.openTime) }
            : {}),
          ...(dto.closeTime !== undefined
            ? { closeTime: this.parseTime(dto.closeTime) }
            : {}),
          ...(dto.openDays !== undefined ? { openDays: dto.openDays } : {}),
          ...(dto.mapUrl !== undefined
            ? { mapUrl: dto.mapUrl?.trim() || null }
            : {}),
          ...(newCoverImageUrl !== undefined
            ? { coverImage: newCoverImageUrl }
            : {}),
        };

        return tx.travelRecommend.update({
          where: { id },
          data,
          include: { images: { orderBy: { order: 'asc' } } },
        });
      });
    } catch (error: unknown) {
      this.logger.error(
        `Failed to update travel ${id}. Cleaning up newly created files.`,
        (error as Error).stack,
      );
      for (const fileUrl of newlyCreatedFiles) {
        await this.mediaService.deleteFileByUrl(fileUrl);
      }
      throw error;
    }
  }

  /**
   * Delete travel recommendation and clean up all associated physical media files.
   */
  async remove(id: string) {
    const travel = await this.findOne(id);

    // Delete cover image physical file
    if (travel.coverImage) {
      await this.mediaService.deleteFileByUrl(travel.coverImage);
    }

    // Delete all gallery images physical files
    if (travel.images && travel.images.length > 0) {
      for (const img of travel.images) {
        await this.mediaService.deleteFileByUrl(img.imageUrl);
      }
    }

    const deleted = await this.prisma.travelRecommend.delete({
      where: { id },
      include: { images: true },
    });

    this.logger.log(`Deleted travel recommendation: ${id}`);
    return deleted;
  }

  /**
   * Append additional gallery images to an existing travel recommendation.
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

      const currentMaxOrder = await this.prisma.travelImage.aggregate({
        where: { travelId: id },
        _max: { order: true },
      });
      const startOrder = (currentMaxOrder._max.order ?? -1) + 1;

      await this.prisma.travelImage.createMany({
        data: urlsToAdd.map((imageUrl, index) => ({
          travelId: id,
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
   * Delete a single gallery image from a travel recommendation.
   */
  async deleteImage(travelId: string, imageId: string) {
    const image = await this.prisma.travelImage.findFirst({
      where: { id: imageId, travelId },
    });

    if (!image) {
      throw new NotFoundException(
        `TravelImage with ID "${imageId}" not found for travel recommendation "${travelId}"`,
      );
    }

    await this.mediaService.deleteFileByUrl(image.imageUrl);
    await this.prisma.travelImage.delete({ where: { id: imageId } });

    return {
      success: true,
      message: 'Travel gallery image deleted successfully',
    };
  }
}
