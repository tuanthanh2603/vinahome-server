import { IsNotEmpty } from 'class-validator';

export class DTO_RQ_Register {
  @IsNotEmpty()
  numberPhone: string;
  @IsNotEmpty()
  password: string;
}
export class DTO_RQ_PhoneLogin {
  @IsNotEmpty()
  numberPhone: string;
  @IsNotEmpty()
  password: string;
}
