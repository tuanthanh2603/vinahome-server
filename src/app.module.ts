import { Module } from '@nestjs/common';
import { CompanyModule } from './modules/company/company.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CompanyModule, AuthModule, PrismaModule, UserModule],
})
export class AppModule {}
