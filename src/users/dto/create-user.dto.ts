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
  name: string;

  @IsString()
  @IsEmail()
  @MinLength(1, { message: 'Email is required' })
  @MaxLength(60, {
    message: 'The email must contain a maximum of 60 characters',
  })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  user_type_id: number;
}
