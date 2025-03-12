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
export class DTO_RQ_SuperAdminLogin {
  username: string;
  password: string;
}
export class DTO_RQ_GoogleLogin {
  accessToken: string;
}
export class DTO_RP_GoogleLogin {
  id: number;
  name: string;
  email: string;
  url_avatar: string;
  account_type: string;
}
