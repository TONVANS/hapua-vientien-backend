import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { GalleryModule } from '../gallery/gallery.module';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule, GalleryModule],
  providers: [HotelService],
  exports: [HotelService],
})
export class HotelModule {}
