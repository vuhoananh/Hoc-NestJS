/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(@Inject('USER_SERVICE_VU') private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.userService.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return 'Valid';
  }
}
