/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DTO_RQ_PhoneLogin, DTO_RQ_SuperAdminLogin } from './auth.dto';
import { ApiResponse } from 'src/utils/api-response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // E1.UC01: Super Admin Login
  @Post('/super-admin-login')
  async superAdminLogin(@Body() dto: DTO_RQ_SuperAdminLogin) {
    try {
      const response = await this.authService.superAdminLogin(dto);
      return ApiResponse.success(response);
    } catch (error) {
      return ApiResponse.error(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // @Post('/user-register')
  // async userRegister(@Body() dto: DTO_RQ_Register) {
  //   return await this.authService.userRegister(dto);
  // }

  // @Post('/user-phone-login')
  // userPhoneLogin(@Body() dto: DTO_RQ_PhoneLogin) {
  //   return this.authService.userPhoneLogin(dto);
  // }
}
