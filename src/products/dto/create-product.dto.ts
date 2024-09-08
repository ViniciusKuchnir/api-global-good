import {
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1, { message: 'Name is required' })
  @MaxLength(30, { message: 'Name is too long' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1, { message: 'Description is required' })
  @MaxLength(255, { message: 'Description is too long' })
  description: string;

  @IsNumber()
  @IsInt()
  @Min(1, { message: 'Quantity must be greater than zero' })
  quantity: number;

  @IsDecimal()
  @Min(0.01, { message: 'Unity price must be greater than zero' })
  unity_price: number;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  category_id: string;
}
