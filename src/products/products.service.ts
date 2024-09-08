import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { SkuGenerator } from 'src/sku/interface/sku.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @Inject('SkuGenerator')
    private readonly skuGenerator: SkuGenerator,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const productsExists = await this.productRepo.existsBy({
      name: createProductDto.name,
    });

    if (productsExists) {
      throw new ConflictException('Product already exists');
    }

    const product = this.productRepo.create({
      ...createProductDto,
      category: { id: createProductDto.category_id },
    });

    product.sku = this.skuGenerator.generate(product);

    return await this.productRepo.save(product);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
