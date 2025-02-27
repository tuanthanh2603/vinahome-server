import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { DTO_RQ_Company } from './company.dto';
import { ApiResponse } from 'src/utils/api-response';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // E3.UC01: Create Company
  @Post('/create')
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

  // E3.UC02: Update Company Information

  // E3.UC03: Filter/Get List Company
  @Get('/get-all')
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

  // E3.UC04: Lock Company

  // E3.UC05: Filter/Get Profile Company

  // E3.UC06: Delete Company

  // E3.UC07: Register Sale Ticket on Platform

  // E3.UC08: Filter/Get List Register Sale Ticket on Platform
}
