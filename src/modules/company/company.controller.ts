import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { DTO_RQ_Company } from './company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/create-company')
  async createCompany(@Body() company: DTO_RQ_Company) {
    return this.companyService.createCompany(company);
  }
}
