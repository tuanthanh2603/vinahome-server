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

  // Function: Update Avatar Account
  @Put('/update-avatar-account/:userId')
  async updateAvatarAccount(
    @Param('userId') userId: number,
    @Body() body: { url_avatar: string },
  ) {
    try {
      console.log('User ID:', userId);
      console.log('Avatar:', body.url_avatar);

      const response = await this.accountService.updateAvatarAccount(
        userId,
        body.url_avatar,
      );
      return ApiResponse.success(response);
    } catch (error) {
      console.error('Error updating avatar account:', error);
      return ApiResponse.error(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // [E2.US07] Filter/Get List Account By Company
  @Get('/get-list-account-by-company/:companyId')
  async getListAccountByCompany(@Param('companyId') companyId: number) {
    try {
      console.log('Company ID:', companyId);
      const response =
        await this.accountService.getListAccountByCompany(companyId);
      return ApiResponse.success(response);
    } catch (error) {
      console.error('Error getting list account by company:', error);
      return ApiResponse.error(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
