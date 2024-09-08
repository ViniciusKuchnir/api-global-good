import { ConfigService } from '@nestjs/config';
import { SkuGenerator } from '../interface/sku.interface';
import { SkuGeneratorType } from '../enum/sku-generator.enum';
import { RandomSkuGenerator } from '../random-sku-generator.service';
import { HexadecimalSkuGenerator } from '../hexadecimal-sku-generator.service';
import { HashSkuGenerator } from '../hash-sku-generator.service';
import { TimeSkuGenerator } from '../time-sku-generator.service';

export class SkuGeneratorFactory {
  constructor(private readonly configService: ConfigService) {}

  createSkuGenerator(): SkuGenerator {
    const algorithm = this.configService.get<SkuGeneratorType>(
      'SKU_GENERATOR_ALGORITHM',
    );

    switch (algorithm) {
      case SkuGeneratorType.RANDOM:
        return new RandomSkuGenerator();
      case SkuGeneratorType.HEX:
        return new HexadecimalSkuGenerator();
      case SkuGeneratorType.HASH:
        return new HashSkuGenerator();
      case SkuGeneratorType.TIME:
        return new TimeSkuGenerator();
      default:
        throw new Error('Unknown SKU generation algorithm');
    }
  }
}
