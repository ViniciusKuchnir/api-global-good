import { Injectable } from '@nestjs/common';
import { CreateUserTypeSeedDto } from './dto/create-user-type-seed.dto';
import { UpdateUserTypeSeedDto } from './dto/update-user-type-seed.dto';

@Injectable()
export class UserTypeSeedService {
  create(createUserTypeSeedDto: CreateUserTypeSeedDto) {
    return 'This action adds a new userTypeSeed';
  }

  findAll() {
    return `This action returns all userTypeSeed`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTypeSeed`;
  }

  update(id: number, updateUserTypeSeedDto: UpdateUserTypeSeedDto) {
    return `This action updates a #${id} userTypeSeed`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTypeSeed`;
  }
}
