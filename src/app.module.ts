import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './modules/account/account.module';
import { PointModule } from './modules/point/point.module';
import { RouteModule } from './modules/route/route.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { SeatModule } from './modules/seat/seat.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { TripModule } from './modules/trip/trip.module';

@Module({
  imports: [
    ConfigModule,
    CompanyModule,
    AuthModule,
    PrismaModule,
    AccountModule,
    PointModule,
    RouteModule,
    ScheduleModule,
    SeatModule,
    TicketModule,
    TripModule,
  ],
})
export class AppModule {}
