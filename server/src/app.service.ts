import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class AppService {
  private userDBmock: CreateUserDto[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): CreateUserDto[] {
    return this.userDBmock;
  }

  createUser(user: CreateUserDto): CreateUserDto {
    this.userDBmock.push(user);
    return user;
  }
}
