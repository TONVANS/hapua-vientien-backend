import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';
import { ServeStaticModule } from '@nestjs/serve-static';
import { APP_GUARD, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import * as path from 'path';
import * as fs from 'fs';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { CountryModule } from './modules/country/country.module';
import { OrganizationModule } from './modules/organization/organization.module';
import { RoomModule } from './modules/room/room.module';
import { ActivityModule } from './modules/activity/activity.module';
import { DelegationModule } from './modules/delegation/delegation.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { HotelModule } from './modules/hotel/hotel.module';
import { TravelModule } from './modules/travel/travel.module';
import { PublicModule } from './public/public.module';
import { AdminModule } from './admin/admin.module';
import { DEFAULT_EXTERNAL_STORAGE_PATH, DEFAULT_MEDIA_URL_PREFIX } from './modules/gallery/gallery.constants';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const rawStoragePath =
          configService.get<string>('EXTERNAL_STORAGE_PATH') || DEFAULT_EXTERNAL_STORAGE_PATH;
        const externalStoragePath = path.resolve(rawStoragePath);

        // Ensure external physical directory exists
        if (!fs.existsSync(externalStoragePath)) {
          fs.mkdirSync(externalStoragePath, { recursive: true });
        }

        const rawPrefix =
          configService.get<string>('MEDIA_URL_PREFIX') || DEFAULT_MEDIA_URL_PREFIX;
        const serveRoot = rawPrefix.startsWith('/') ? rawPrefix : `/${rawPrefix}`;

        return [
          {
            rootPath: externalStoragePath,
            serveRoot,
            serveStaticOptions: {
              index: false,
              maxAge: '1d',
            },
          },
          {
            rootPath: externalStoragePath,
            serveRoot: '/uploads',
            serveStaticOptions: {
              index: false,
              maxAge: '1d',
            },
          },
        ];
      },
    }),
    ThrottlerModule.forRoot([
      {
        ttl: parseInt(process.env.THROTTLE_TTL || '60000', 10),
        limit: parseInt(process.env.THROTTLE_LIMIT || '100', 10),
      },
    ]),
    CacheModule.register({
      isGlobal: true,
      ttl: parseInt(process.env.CACHE_TTL || '60000', 10),
    }),
    PrismaModule,
    AuthModule,
    CountryModule,
    OrganizationModule,
    RoomModule,
    ActivityModule,
    DelegationModule,
    GalleryModule,
    HotelModule,
    TravelModule,
    PublicModule,
    AdminModule,
  ],
  providers: [
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
