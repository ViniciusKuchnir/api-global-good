import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeSeed } from './user-type-seed/entities/user-type-seed.entity';
import { UserTypeSeedService } from './user-type-seed/user-type-seed.service';

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
    TypeOrmModule.forFeature([UserTypeSeed]),
  ],
  providers: [UserTypeSeedService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly userTypeSeedService: UserTypeSeedService) {}

  async onModuleInit() {
    await this.userTypeSeedService.seed();
  }
}
