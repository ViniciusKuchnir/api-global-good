import { Product } from 'src/products/entities/product.entity';
import { SkuGenerator } from './interface/sku.interface';
import * as crypto from 'crypto';

export class HashSkuGenerator implements SkuGenerator {
  generate(product: Product): string {
    const jsonString = JSON.stringify(product);
    const hash = crypto
      .createHash('md5')
      .update(jsonString)
      .digest('hex')
      .substring(0, 31);

    return `HASH-${hash}`;
  }
}
