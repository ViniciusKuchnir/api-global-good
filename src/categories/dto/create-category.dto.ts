import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30, { message: 'Name is too long' })
  @MinLength(1, { message: 'Name is required' })
  name: string;
}
