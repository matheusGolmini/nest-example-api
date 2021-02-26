import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users-repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOneByEmail(email);
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(email: string) {
    const isdelete = this.usersRepository.remove(email);
    if (!isdelete) {
      throw new NotFoundException('Usuário não foi encontrado');
    }
    return 'usuário deletado';
  }
}
