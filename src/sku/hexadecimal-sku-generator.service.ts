import { Product } from 'src/products/entities/product.entity';
import { SkuGenerator } from './interface/sku.interface';

export class HexadecimalSkuGenerator implements SkuGenerator {
  generate(product: Product): string {
    const jsonString = JSON.stringify(product);
    const hexString = Array.from(jsonString)
      .map((char) => {
        const hex = char.charCodeAt(0).toString(16).padStart(2, '0');
        return hex;
      })
      .join('');

    const code = hexString.substring(0, 32);

    return `HEX-${code}`;
  }
}
