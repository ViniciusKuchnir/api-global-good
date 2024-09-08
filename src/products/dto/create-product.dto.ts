import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
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
  @ApiProperty({
    description: 'The name of the product',
    example: 'Microwave',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1, { message: 'Description is required' })
  @MaxLength(255, { message: 'Description is too long' })
  @ApiProperty({
    description: 'The description of the product',
    example:
      'Compact and efficient microwave ideal for quickly heating and cooking food. With multiple cooking modes and adjustable power, it streamlines your kitchen routine. Modern design and easy to use, it fits seamlessly into any space.',
  })
  description: string;

  @IsNumber()
  @IsInt()
  @Min(1, { message: 'Quantity must be greater than zero' })
  @ApiProperty({
    description: 'Quantity of products to be added to stock',
    example: 10,
  })
  quantity: number;

  @IsNumber()
  @Min(0.01, { message: 'Unity price must be greater than zero' })
  @ApiProperty({
    description: 'The unity price of the product',
    example: 1499.9,
  })
  unity_price: number;

  @IsBoolean()
  @ApiProperty({
    description: 'Shows whether the product should be shown to customers',
    example: [true, false],
  })
  isActive: boolean;

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The category id of the product',
    example: 'f0246d3b-8545-473f-a2b3-c1447a813ef1',
  })
  category_id: string;
}
