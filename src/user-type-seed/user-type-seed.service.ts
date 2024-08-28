import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTypeSeed } from './entities/user-type-seed.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UserTypeSeedService {
  constructor(
    @InjectRepository(UserTypeSeed)
    private readonly userTypeRepository: Repository<UserTypeSeed>,
  ) {}
  async seed() {
    const userTypes = [{ name: 'Company' }, { name: 'Customer' }];

    for (const userType of userTypes) {
      const exists = await this.userTypeRepository.findOne({
        where: { name: userType.name },
      });
      if (!exists) {
        const newUserType = this.userTypeRepository.create(userType);
        await this.userTypeRepository.save(newUserType);
      }
    }
  }

  findAll() {
    return `This action returns all userTypeSeed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTypeSeed`;
  }
}
