import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Controller('create-user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  async getUser(): Promise<UserEntity[]> {
    return await this.appService.findAllUser();
  }

  @Post()
  @HttpCode(201)
  async createUser(@Body() data: CreateUserDto): Promise<UserEntity> {
    return await this.appService.createUser(data);
  }

  @Get(':id')
  @HttpCode(200)
  async findUserById(@Param('id') id: string): Promise<UserEntity> {
    return await this.appService.findUserById(id);
  }

  @Put(':id')
  @HttpCode(200)
  async updateUser(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.appService.updateUser(id, data);
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: string): Promise<void> {
    await this.appService.deleteUser(id);
  }
}
