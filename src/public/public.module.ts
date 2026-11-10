import { Module } from '@nestjs/common';
import { PublicActivityController } from './public-activity.controller';
import { PublicGalleryController } from './public-gallery.controller';
import { PublicHotelController } from './public-hotel.controller';
import { PublicTravelController } from './public-travel.controller';
import { PublicRegistrationController } from './public-registration.controller';
import { PublicLandingController } from './public-landing.controller';
import { PublicVisitController } from './public-visit.controller';

import { ActivityModule } from '../modules/activity/activity.module';
import { GalleryModule } from '../modules/gallery/gallery.module';
import { HotelModule } from '../modules/hotel/hotel.module';
import { TravelModule } from '../modules/travel/travel.module';
import { DelegationModule } from '../modules/delegation/delegation.module';
import { VisitModule } from '../modules/visit/visit.module';

@Module({
  imports: [
    ActivityModule,
    GalleryModule,
    HotelModule,
    TravelModule,
    DelegationModule,
    VisitModule,
  ],
  controllers: [
    PublicActivityController,
    PublicGalleryController,
    PublicHotelController,
    PublicTravelController,
    PublicRegistrationController,
    PublicLandingController,
    PublicVisitController,
  ],
})
export class PublicModule {}
