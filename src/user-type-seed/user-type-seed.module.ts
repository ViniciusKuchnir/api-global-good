import { Module } from '@nestjs/common';
import { UserTypeSeedService } from './user-type-seed.service';
import { UserTypeSeedController } from './user-type-seed.controller';

@Module({
  controllers: [UserTypeSeedController],
  providers: [UserTypeSeedService],
})
export class UserTypeSeedModule {}
