import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'products' })
export class Product {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  @ApiProperty({
    example: [
      'HASH-3123f3c761ce6db1b30109e234b0b17',
      'HEX-7b226e616d65223a2254657374652031',
      'RND-AUN0GST79FN',
      'TIME-1725828902545',
    ],
  })
  sku: string;

  @Column({ type: 'varchar', length: 30, nullable: false, unique: true })
  @ApiProperty({ example: 'Microwave' })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @ApiProperty({
    example:
      'Compact and efficient microwave ideal for quickly heating and cooking food. With multiple cooking modes and adjustable power, it streamlines your kitchen routine. Modern design and easy to use, it fits seamlessly into any space.',
  })
  description: string;

  @Column({ type: 'int', nullable: false })
  @ApiProperty({ example: 10 })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @ApiProperty({ example: 1499.9 })
  unity_price: number;

  @Column({ type: 'boolean', nullable: false, default: true })
  @ApiProperty({ example: [true, false] })
  isActive: boolean;

  @ManyToOne(() => Category, (category) => category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'category_id' })
  @ApiProperty({ type: () => Category })
  category: Category;

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
