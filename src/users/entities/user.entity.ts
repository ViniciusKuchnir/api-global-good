import { ApiProperty } from '@nestjs/swagger';
import { UserTypeSeed } from 'src/user-type-seed/entities/user-type-seed.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty({ example: "d290f1ee-6c54-4b01-90e6-d701748f0851" })
  id: string;

  @Column({ type: 'varchar', length: 60, nullable: false })
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @Column({ type: 'varchar', length: 60, nullable: false, unique: true })
  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

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

  @ManyToOne(() => UserTypeSeed, (type) => type, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'user_type_id' })
  @ApiProperty({ type: () => UserTypeSeed })
  user_type: UserTypeSeed;
}
