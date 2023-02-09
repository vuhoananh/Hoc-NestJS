import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return [
      {
        name: 'Quang Anh',
        age: 25,
      },
      {
        name: 'Hoang Anh',
        age: 23,
      },
    ];
  }

  @Post()
  createUser() {
    return {
      name: 'Quang Anh',
      age: 25,
    };
  }
}
