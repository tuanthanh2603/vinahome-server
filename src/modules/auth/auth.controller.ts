/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DTO_RQ_PhoneLogin, DTO_RQ_Register } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/user-register')
  async userRegister(@Body() dto: DTO_RQ_Register) {
    return await this.authService.userRegister(dto);
  }

  @Post('/user-phone-login')
  userPhoneLogin(@Body() dto: DTO_RQ_PhoneLogin) {
    return this.authService.userPhoneLogin(dto);
  }
}
