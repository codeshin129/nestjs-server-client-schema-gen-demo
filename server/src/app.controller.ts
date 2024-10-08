import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): CreateUserDto[] {
    return this.appService.getUsers();
  }

  @Post()
  createUser(@Body() user: CreateUserDto): CreateUserDto {
    return this.appService.createUser(user);
  }
}
