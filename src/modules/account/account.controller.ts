import { Body, Controller, Get, HttpStatus, Param, Put } from '@nestjs/common';
import { AccountService } from './account.service';
import { ApiResponse } from 'src/utils/api-response';
import { DTO_RQ_AccountCustomerInfo } from './account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // Function: Get Account Info
  @Get('/get-account-info/:userId')
  async getAccountInfo(@Param('userId') userId: number) {
    try {
      console.log('User ID', userId);
      const response = await this.accountService.getAccountInfo(userId);
      return ApiResponse.success(response);
    } catch (error) {
      return ApiResponse.error(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Function: Update Account Info
  @Put('/update-account-info/:userId')
  async updateAccountInfo(
    @Param('userId') userId: number,
    @Body() accountInfo: DTO_RQ_AccountCustomerInfo,
  ) {
    try {
      console.log('User ID:', userId);
      console.log('Account Info:', accountInfo);

      const response = await this.accountService.updateAccountInfo(
        userId,
        accountInfo,
      );
      return ApiResponse.success(response);
    } catch (error) {
      console.error('Error updating account info:', error);
      return ApiResponse.error(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
