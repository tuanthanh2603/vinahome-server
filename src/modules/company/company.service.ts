import { Injectable } from '@nestjs/common';
import { DTO_RQ_Company } from './company.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}

  createCompany(company: DTO_RQ_Company) {
    console.log('company', company);
    return 'register';
  }
}
