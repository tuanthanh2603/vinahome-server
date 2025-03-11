import {
  Column, CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from '../company/company.entity';

@Entity('tbl_users')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @Column()
  url_avatar: string;
  @Column()
  date_birth: Date;
  @Column()
  gender: number;
  @Column()
  email: string;
  @Column()
  role: number;
  @Column()
  account_type: string;
  @Column()
  name: string;
  @Column()
  status: boolean;
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ManyToOne(() => Company, (company) => company.account, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'company' })
  company: Company;
}
