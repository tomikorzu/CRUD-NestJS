import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  create(user: CreateUserDto) {
    return this.usersRepository.createUser(user);
  }

  findAll() {
    return this.usersRepository.getAllUsers();
  }

  findOneById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  findOneByEmail(email: string) {
    return this.usersRepository.getUserByEmail(email);
  }

  findOneByUsername(username: string) {
    return this.usersRepository.getUserByEmail(username);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.updateUser(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.removeUser(id);
  }
}
