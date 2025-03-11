import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';
import { DTO_RQ_PhoneLogin, DTO_RQ_Register, DTO_RQ_SuperAdminLogin } from './auth.dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable({})
export class AuthService {
  constructor(
    // private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signJwtToken(userId: number): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
    };
    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '30m',
      secret: 'CVbn12345',
    });
    return {
      accessToken: jwtString,
    };
  }

  // async userRegister(dto: DTO_RQ_Register) {
  //   const hashedPassword = await argon.hash(dto.password);
  //   return this.prismaService.user.create({
  //     data: {
  //       numberPhone: dto.numberPhone,
  //       password: hashedPassword,
  //       fullName: '',
  //       address: '',
  //       username: '',
  //       companyId: 1,
  //     },
  //     select: {
  //       id: true,
  //       numberPhone: true,
  //       createdAt: true,
  //     },
  //   });
  // }

  // async userPhoneLogin(dto: DTO_RQ_PhoneLogin) {
  //   console.log(dto);
  //   const user = await this.prismaService.user.findFirst({
  //     where: {
  //       numberPhone: dto.numberPhone,
  //     },
  //   });
  //   if (!user) {
  //     throw new Error('Số điện thoại chưa được đăng ký!');
  //   }
  //   const passwordMatch = await argon.verify(user.password, dto.password);
  //   if (!passwordMatch) {
  //     throw new Error('Mật khẩu không chính xác');
  //   }
  //   return await this.signJwtToken(user.id);
  // }
  async superAdminLogin(dto: DTO_RQ_SuperAdminLogin) {
    console.log(dto);
  }
}
