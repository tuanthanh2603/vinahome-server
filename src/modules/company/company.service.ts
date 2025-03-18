import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { DTO_RP_Company, DTO_RQ_Company } from './company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async getAllCompany(): Promise<DTO_RP_Company[]> {
    const companies = await this.companyRepository.find();
    const companiesMapped = companies.map((company) => ({
      id: company.id,
      name: company.name,
      phone: company.phone,
      address: company.address,
      tax_code: company.tax_code,
      status: company.status,
      url_logo: company.url_logo,
      code: company.code,
      note: company.note,
      created_at: company.created_at.toISOString(),
    }));
    return companiesMapped;
  }
  async createCompany(company: DTO_RQ_Company): Promise<DTO_RP_Company> {
    const newCompany = await this.companyRepository.save(company);
    return {
      id: newCompany.id,
      name: newCompany.name,
      phone: newCompany.phone,
      address: newCompany.address,
      tax_code: newCompany.tax_code,
      status: newCompany.status,
      url_logo: newCompany.url_logo,
      code: newCompany.code,
      note: newCompany.note,
      created_at: newCompany.created_at.toISOString(),
    };
  }
}
