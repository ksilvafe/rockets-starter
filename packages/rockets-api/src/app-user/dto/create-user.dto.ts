// eslint-disable-next-line prettier/prettier
import { UserPostgresEntity } from '@concepta/nestjs-user';

export class CreateUserDto extends UserPostgresEntity {
  firstName: string;

  lastName: string;

  dob: string;

  phone: number;

  workingWith: string;

  level: number;
}
