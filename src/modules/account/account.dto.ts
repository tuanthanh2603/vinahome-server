export class DTO_RQ_Account {
  id: number;
  username: string;
  password: string;
  phone: string;
  url_avatar: string;
  date_birth: Date;
  gender: number;
  email: string;
  role: number;
  account_type: string;
  name: string;
  status: boolean;
  created_at: string;
}
export class DTO_RP_Account {
  id: number;
  username: string;
  password: string;
  phone: string;
  url_avatar: string;
  date_birth: Date;
  gender: number;
  email: string;
  role: number;
  account_type: string;
  name: string;
  status: boolean;
  created_at: string;
}
export class DTO_RP_AccountCustomerInfo {
  id: number;
  phone: string;
  url_avatar: string;
  date_birth: Date;
  gender: number;
  email: string;
  account_type: string;
  name: string;
}
export class DTO_RQ_AccountCustomerInfo {
  phone: string;
  url_avatar: string;
  date_birth: Date;
  gender: number;
  email: string;
  account_type: string;
  name: string;
}
