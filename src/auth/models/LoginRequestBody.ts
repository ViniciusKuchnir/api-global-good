import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginRequestBody {
  @IsEmail()
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com',
    maxLength: 60,
  })
  email: string;

  @IsString()
  @ApiProperty({
    description:
      'The password of the user. It must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.',
    example: 'Str0ngP@ssw0rd!',
  })
  password: string;
}
