import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ConfigService } from '@nestjs/config';
import { SkuGeneratorFactory } from 'src/sku/factory/sku-generator.factory';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: 'SkuGenerator',
      useFactory: (configService: ConfigService) => {
        const factory = new SkuGeneratorFactory(configService);
        return factory.createSkuGenerator();
      },
      inject: [ConfigService],
    },
    SkuGeneratorFactory,
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
