import { UserTypeSeed } from 'src/user-type-seed/entities/user-type-seed.entity';

export interface UserFromJwt {
  id: string;
  name: string;
  email: string;
  user_type: UserTypeSeed;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
