import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeSeed } from './user-type-seed/user-type-seed';
import { UserTypeSeedModule } from './user-type-seed/user-type-seed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'globalgood',
      username: 'root',
      password: 'bancodedados',
      ssl: false,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
    }),
    UserTypeSeedModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserTypeSeed],
})
export class AppModule {}
