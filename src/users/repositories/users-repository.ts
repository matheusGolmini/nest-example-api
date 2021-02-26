import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
// import { UpdateUserDto } from '../dto/update-user.dto';
import { Users } from '../entities/user.entity';

let users: Users[] = [];

@Injectable()
export class UsersRepository {
  create(createUserDto: CreateUserDto): Users {
    users.push(createUserDto);
    return createUserDto;
  }

  findAll(): Users[] {
    return users;
  }

  findOneByEmail(email: string): Users {
    return users.find((user: Users) => user.email === email);
  }

  //   update(email: string, updateUserDto: UpdateUserDto) {
  //     let user: Users = this.findOneByEmail(email);
  //     user.email = updateUserDto
  //     return `This action updates a #${id} user`;
  //   }

  remove(email: string): boolean {
    const lengthBefore = users.length;
    users = users.filter(
      (user: Users) => user.email.toLowerCase() !== email.toLowerCase(),
    );

    if (users.length === lengthBefore) {
      return false;
    }
    return true;
  }
}
