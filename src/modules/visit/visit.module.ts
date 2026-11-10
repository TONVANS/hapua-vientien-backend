import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [VisitService],
  exports: [VisitService],
})
export class VisitModule {}
