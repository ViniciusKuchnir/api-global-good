import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeSeed } from './user-type-seed/entities/user-type-seed.entity';
import { UserTypeSeedService } from './user-type-seed/user-type-seed.service';
import { UsersModule } from './users/users.module';
import { validate } from './env.validation';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'globalgood',
      username: 'root',
      password: 'bancodedados',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      validate,
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([UserTypeSeed]),
    UsersModule,
    AuthModule,
    CategoriesModule,
    ProductsModule,
  ],
  providers: [
    UserTypeSeedService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly userTypeSeedService: UserTypeSeedService) {}

  async onModuleInit() {
    await this.userTypeSeedService.seed();
  }
}
