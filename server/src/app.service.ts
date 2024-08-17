import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  gender: 'F' | 'M';
  age?: number;
}

@Injectable()
export class AppService {
  private userDBmock: User[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): User[] {
    return this.userDBmock;
  }

  createUser(user: User): User {
    this.userDBmock.push(user);
    return user;
  }
}
