import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeSeedService } from './user-type-seed.service';

describe('UserTypeSeedService', () => {
  let service: UserTypeSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTypeSeedService],
    }).compile();

    service = module.get<UserTypeSeedService>(UserTypeSeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
