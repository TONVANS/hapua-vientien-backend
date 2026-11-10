import { Module } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { MediaService } from './media.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GalleryService, MediaService],
  exports: [GalleryService, MediaService],
})
export class GalleryModule {}
