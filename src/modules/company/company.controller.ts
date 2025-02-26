import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { DTO_RQ_Company } from './company.dto';
import { ApiResponse } from 'src/utils/api-response';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/create-company')
  async createCompany(@Body() company: DTO_RQ_Company) {
    try {
      const companies = await this.companyService.createCompany(company);
      console.log(companies);
      return ApiResponse.success(companies);
    } catch (error) {
      return ApiResponse.error(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/get-all-company')
  async getAllCompany() {
    try {
      const companies = await this.companyService.getAllCompany();
      return ApiResponse.success(companies);
    } catch (error) {
      return ApiResponse.error(
        'Failed to retrieve company list',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
