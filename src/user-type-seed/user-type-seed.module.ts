import { Module } from '@nestjs/common';
import { UserTypeSeedService } from './user-type-seed.service';

@Module({
  providers: [UserTypeSeedService],
})
export class UserTypeSeedModule {}
