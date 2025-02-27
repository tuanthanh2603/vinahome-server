import { Injectable } from '@nestjs/common';
import { DTO_RP_Company, DTO_RQ_Company } from './company.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}

  async createCompany(dto: DTO_RQ_Company): Promise<DTO_RP_Company> {
    return this.prismaService.company.create({
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
  }

  async getAllCompany(): Promise<DTO_RP_Company[]> {
    return this.prismaService.company.findMany({
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
  }
}
