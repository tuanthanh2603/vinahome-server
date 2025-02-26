import { CompanyController } from './company.controller';
import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
