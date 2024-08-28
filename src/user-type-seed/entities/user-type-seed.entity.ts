import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_types' })
export class UserTypeSeed {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty({ example: 1 })
  id: number;

  @Column({ type: 'varchar', length: 15, nullable: false, unique: true })
  @ApiProperty({ example: 'Company' })
  name: string;
}
