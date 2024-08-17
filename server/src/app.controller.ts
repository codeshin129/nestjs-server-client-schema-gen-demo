import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, type User } from './app.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() user: CreateUserDto): User {
    return this.appService.createUser(user);
  }
}
