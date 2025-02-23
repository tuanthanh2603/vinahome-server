import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://vinahome_owner:npg_49RqHiGydKXh@ep-curly-scene-a1y4nv5o-pooler.ap-southeast-1.aws.neon.tech/vinahome?sslmode=require',
        },
      },
    });
  }
}
