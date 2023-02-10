import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  createUser(user: any): any {
    user.id = 1;
    user.createAt = new Date();
    user.updateAt = new Date();

    return UserDto.plainToClass(user);
  }
}
