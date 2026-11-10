import { Module } from '@nestjs/common';
import { TravelService } from './travel.service';
import { GalleryModule } from '../gallery/gallery.module';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule, GalleryModule],
  providers: [TravelService],
  exports: [TravelService],
})
export class TravelModule {}
