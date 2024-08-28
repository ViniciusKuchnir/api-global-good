import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1, { message: 'Name is required' })
  @MaxLength(60, {
    message: 'The name must contain a maximum of 60 characters',
  })
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    maxLength: 60,
    minLength: 1,
  })
  name: string;

  @IsString()
  @IsEmail()
  @MinLength(1, { message: 'Email is required' })
  @MaxLength(60, {
    message: 'The email must contain a maximum of 60 characters',
  })
  @IsNotEmpty()
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
  })
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
    maxLength: 60,
  })
  email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  @ApiProperty({
    description:
      'The password of the user. It must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.',
    example: 'Str0ngP@ssw0rd!',
  })
  password: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'The ID of the user type associated with the user',
    example: 1,
  })
  user_type_id: number;
}
