import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30, { message: 'Name is too long' })
  @MinLength(1, { message: 'Name is required' })
  @ApiProperty({
    description: 'The name of the category',
    example: 'Home and Kitchen',
    maxLength: 30,
    minLength: 1,
  })
  name: string;
}
