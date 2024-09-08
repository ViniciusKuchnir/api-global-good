import { SkuGenerator } from './interface/sku.interface';

export class RandomSkuGenerator implements SkuGenerator {
  generate(): string {
    return 'RND-' + Math.random().toString(36).substring(2, 34).toUpperCase();
  }
}
