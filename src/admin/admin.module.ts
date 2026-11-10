import { Module } from '@nestjs/common';
import { AdminDelegationController } from './admin-delegation.controller';
import { AdminActivityController } from './admin-activity.controller';
import { AdminRoomController } from './admin-room.controller';
import { AdminGalleryController } from './admin-gallery.controller';
import { AdminHotelController } from './admin-hotel.controller';
import { AdminTravelController } from './admin-travel.controller';
import { AdminCountryController } from './admin-country.controller';
import { AdminOrganizationController } from './admin-organization.controller';
import { AdminReportController } from './admin-report.controller';

import { DelegationModule } from '../modules/delegation/delegation.module';
import { ActivityModule } from '../modules/activity/activity.module';
import { RoomModule } from '../modules/room/room.module';
import { GalleryModule } from '../modules/gallery/gallery.module';
import { HotelModule } from '../modules/hotel/hotel.module';
import { TravelModule } from '../modules/travel/travel.module';
import { CountryModule } from '../modules/country/country.module';
import { OrganizationModule } from '../modules/organization/organization.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    DelegationModule,
    ActivityModule,
    RoomModule,
    GalleryModule,
    HotelModule,
    TravelModule,
    CountryModule,
    OrganizationModule,
    PrismaModule,
  ],
  controllers: [
    AdminDelegationController,
    AdminActivityController,
    AdminRoomController,
    AdminGalleryController,
    AdminHotelController,
    AdminTravelController,
    AdminCountryController,
    AdminOrganizationController,
    AdminReportController,
  ],
})
export class AdminModule {}
