import { Body, Controller, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CompanyService } from './company.service';
import { DTO_RP_Company, DTO_RQ_Company } from './company.dto';
import { ApiResponse } from 'src/utils/api-response';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // E3.UC01: Create Company
  @Post('/create')
  async createCompany(@Body() company: DTO_RQ_Company) {
    try {
      const companies = await this.companyService.createCompany(company);
      return ApiResponse.success(companies);
    } catch (error) {
      return ApiResponse.error(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // E3.UC02: Update Company Information
  @Put('/update/:id')
  async updateCompany(
    @Param('id') id: number,
    @Body() company: DTO_RQ_Company,
  ): Promise<ApiResponse<DTO_RP_Company>> {
    try {
      const updatedCompany = await this.companyService.updateCompany(
        id,
        company,
      );
      return ApiResponse.success(updatedCompany);
    } catch (error) {
      return ApiResponse.error(
        error.message || 'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // E3.UC03: Filter/Get List Company
  @Get('/get-all')
  async getAllCompany(): Promise<ApiResponse<DTO_RP_Company[]>> {
    try {
      const companies = await this.companyService.getAllCompany();
      return ApiResponse.success(companies);
    } catch (error) {
      return ApiResponse.error(
        'Internal Server Error',
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
