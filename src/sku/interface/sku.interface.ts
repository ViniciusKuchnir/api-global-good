import { Product } from 'src/products/entities/product.entity';

export interface SkuGenerator {
  generate(product: Product): string;
}
