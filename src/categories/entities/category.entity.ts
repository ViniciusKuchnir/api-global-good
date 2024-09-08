import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'f0246d3b-8545-473f-a2b3-c1447a813ef1' })
  id: string;

  @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
  @ApiProperty({ example: 'Home and Kitchen' })
  name: string;

  @CreateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    precision: 0,
    nullable: false,
  })
  @ApiProperty({ example: '2024-08-28T18:08:01.000Z' })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
    precision: 0,
  })
  @ApiProperty({ example: '2024-08-28T18:08:01.000Z' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  @ApiProperty({ example: ['2024-08-28T18:08:01.000Z', null] })
  deletedAt: Date;
}
