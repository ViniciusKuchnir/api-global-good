import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTypeSeedService } from './user-type-seed.service';
import { CreateUserTypeSeedDto } from './dto/create-user-type-seed.dto';
import { UpdateUserTypeSeedDto } from './dto/update-user-type-seed.dto';

@Controller('user-type-seed')
export class UserTypeSeedController {
  constructor(private readonly userTypeSeedService: UserTypeSeedService) {}

  @Post()
  create(@Body() createUserTypeSeedDto: CreateUserTypeSeedDto) {
    return this.userTypeSeedService.create(createUserTypeSeedDto);
  }

  @Get()
  findAll() {
    return this.userTypeSeedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTypeSeedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTypeSeedDto: UpdateUserTypeSeedDto) {
    return this.userTypeSeedService.update(+id, updateUserTypeSeedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTypeSeedService.remove(+id);
  }
}
