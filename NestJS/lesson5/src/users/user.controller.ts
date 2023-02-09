/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.id = 1;
    user.createAt = new Date();
    user.updateAt = new Date();

    return UserDto.plainToClass(user);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return 'Valid';
  }
}
