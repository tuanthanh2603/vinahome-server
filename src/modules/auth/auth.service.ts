import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  DTO_RP_GoogleLogin,
  DTO_RQ_GoogleLogin,
  DTO_RQ_SuperAdminLogin,
} from './auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../account/account.entity';
import { Repository } from 'typeorm';

@Injectable({})
export class AuthService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    private jwtService: JwtService,
  ) {}

  async signJwtToken(
    userId: number,
    account_type: string,
    role: number,
  ): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
      account_type,
      role,
    };

    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '30m',
      secret: 'CVbn12345',
    });

    return {
      accessToken: jwtString,
    };
  }

  async superAdminLogin(dto: DTO_RQ_SuperAdminLogin) {
    console.log(dto);
  }
  async googleLogin(dto: DTO_RQ_GoogleLogin): Promise<DTO_RP_GoogleLogin> {
    try {
      console.log('Received access token:', dto.accessToken);
      const response = await fetch(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${dto.accessToken}`,
          },
        },
      );
      const userData = await response.json();
      console.log('Google user data:', userData);
      if (!response.ok || !userData.email) {
        throw new UnauthorizedException('Invalid Google token');
      }

      let user = await this.accountRepository.findOne({
        where: { email: userData.email, account_type: 'GOOGLE' },
      });

      if (!user) {
        user = this.accountRepository.create({
          email: userData.email,
          name: userData.name,
          url_avatar: userData.picture,
          account_type: 'GOOGLE',
          role: 1,
        });

        await this.accountRepository.save(user);
        console.log('New user created:', user);
      }
      const { accessToken } = await this.signJwtToken(
        user.id,
        user.account_type,
        user.role,
      );
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        url_avatar: user.url_avatar,
        account_type: user.account_type,
        role: user.role,
        token: accessToken,
      };
    } catch (error) {
      console.error('Google authentication failed', error);
      throw new UnauthorizedException('Invalid Google token');
    }
  }
}
