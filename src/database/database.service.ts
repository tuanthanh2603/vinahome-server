import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}

  async testConnection(): Promise<void> {
    try {
      await this.dataSource.initialize();
      console.log('✅ Database connected successfully!');
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      throw error;
    }
  }
}
