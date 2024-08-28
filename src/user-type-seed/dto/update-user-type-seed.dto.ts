import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTypeSeedDto } from './create-user-type-seed.dto';

export class UpdateUserTypeSeedDto extends PartialType(CreateUserTypeSeedDto) {}
