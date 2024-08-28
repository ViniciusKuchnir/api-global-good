import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeSeedController } from './user-type-seed.controller';
import { UserTypeSeedService } from './user-type-seed.service';

describe('UserTypeSeedController', () => {
  let controller: UserTypeSeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTypeSeedController],
      providers: [UserTypeSeedService],
    }).compile();

    controller = module.get<UserTypeSeedController>(UserTypeSeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
