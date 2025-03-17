import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';
import {
  DTO_RQ_AccountCustomerInfo,
  DTO_RP_AccountCustomerInfo,
} from './account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async getAccountInfo(userId: number): Promise<DTO_RP_AccountCustomerInfo> {
    try {
      const user = await this.accountRepository.findOne({
        where: { id: userId },
      });
      return {
        id: user.id,
        phone: user.phone,
        url_avatar: user.url_avatar,
        date_birth: user.date_birth,
        gender: user.gender,
        email: user.email,
        account_type: user.account_type,
        name: user.name,
      };
    } catch (error) {
      console.error('Error', error);
      throw new Error('Error');
    }
  }
  async updateAccountInfo(
    userId: number,
    accountInfo: DTO_RQ_AccountCustomerInfo,
  ): Promise<DTO_RP_AccountCustomerInfo> {
    console.log('User ID:', userId);
    console.log('Account Info:', accountInfo);

    const account = await this.accountRepository.findOne({
      where: { id: userId },
    });

    if (!account) {
      throw new NotFoundException(`Không tìm thấy tài khoản với ID ${userId}`);
    }

    Object.assign(account, accountInfo);
    const updatedAccount = await this.accountRepository.save(account);

    return {
      id: updatedAccount.id,
      name: updatedAccount.name,
      email: updatedAccount.email,
      phone: updatedAccount.phone,
      date_birth: updatedAccount.date_birth,
      gender: updatedAccount.gender,
      url_avatar: updatedAccount.url_avatar,
      account_type: updatedAccount.account_type,
    };
  }
  async updateAvatarAccount(
    userId: number,
    url_avatar: string,
  ): Promise<DTO_RP_AccountCustomerInfo> {
    const user = await this.accountRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.url_avatar = url_avatar;
    return this.accountRepository.save(user);
    // return null;
  }
}
