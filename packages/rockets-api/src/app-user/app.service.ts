import { InjectEntityRepository } from '@concepta/nestjs-typeorm-ext';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectEntityRepository()
    private repository: Repository<UserEntity>,
  ) {}

  async findAllUser(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    const user = this.repository.create(data);
    return await this.repository.save(user);
  }

  async findUserById(id: string): Promise<UserEntity> {
    const user = await this.repository.findOneById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findUserById(id);
    await this.repository.update(id, { ...data });

    return this.repository.create({ ...user, ...data });
  }

  async deleteUser(id: string): Promise<void> {
    await this.findUserById(id);
    await this.repository.delete(id);
  }
}
