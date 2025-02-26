import { IsNotEmpty } from 'class-validator';

export class DTO_RQ_Company {
  @IsNotEmpty()
  companyName: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  phoneNumber: string;
  status: boolean;
  note: string;
}
export class DTO_RP_Company {
  id: number;
  name: string;
  phone: string;
  address: string;
  note?: string;
  status: boolean;
  createdAt: Date;
}
