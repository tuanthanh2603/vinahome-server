import { Injectable } from '@nestjs/common';
import { DTO_RP_Company, DTO_RQ_Company } from './company.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}

  async createCompany(dto: DTO_RQ_Company): Promise<DTO_RP_Company> {
    const company = await this.prismaService.company.create({
      data: {
        phone: dto.phoneNumber,
        name: dto.companyName,
        address: dto.address,
        note: dto.note,
        status: dto.status,
      },
      select: {
        id: true,
        phone: true,
        name: true,
        address: true,
        note: true,
        status: true,
        createdAt: true,
      },
    });

    return {
      id: company.id,
      name: company.name,
      phone: company.phone,
      address: company.address,
      note: company.note,
      status: company.status,
      createdAt: company.createdAt,
    };
  }

  async getAllCompany(): Promise<DTO_RP_Company[]> {
    const companies = await this.prismaService.company.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
        address: true,
        note: true,
        status: true,
        createdAt: true,
      },
    });

    return companies.map((company) => ({
      id: company.id,
      name: company.name,
      phone: company.phone,
      address: company.address,
      note: company.note,
      status: company.status,
      createdAt: company.createdAt,
    }));
  }
}
