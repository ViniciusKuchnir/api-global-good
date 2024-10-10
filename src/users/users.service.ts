import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const userExists = await this.userRepo.existsBy({
      email: createUserDto.email,
    });

    if (userExists) {
      throw new ConflictException('User with existing email address');
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(createUserDto.password, salt);

    const newUser = this.userRepo.create({
      ...createUserDto,
      password: passwordHash,
      user_type: { id: createUserDto.user_type_id },
    });

    const user = await this.userRepo.save(newUser);

    return {
      ...user,
      password: undefined,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepo.findOneBy({
      email,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
