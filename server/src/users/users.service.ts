import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './users.repository';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from 'src/shared/types/users.types';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(
    user: Prisma.UserCreateInput,
  ): Promise<{ message: string; user: CreateUserDto } | BadRequestException> {
    const existsUser: Prisma.UserCreateInput | null =
      await this.userRepository.getUserByEmail(user.email);
    if (existsUser) {
      const existUserToReturn: CreateUserDto = {
        id: existsUser.id!,
        email: existsUser.email,
        name: existsUser.name,
        image: existsUser.image || '',
        role: existsUser.role as UserRole,
        position: existsUser.position || '',
      };
      return {
        message: 'User already exists',
        user: existUserToReturn,
      };
    }
    const userCreated = await this.userRepository.createUser(user);
    const userToReturn: CreateUserDto = {
      id: userCreated.id,
      email: userCreated.email,
      name: userCreated.name,
      image: userCreated.image || '',
      role: userCreated.role as UserRole,
      position: userCreated.position || '',
    };
    return {
      message: 'User created successfully',
      user: userToReturn,
    };
  }

  async findAll() {
    const users = await this.userRepository.getUsers();
    if (!users || users.length === 0)
      throw new NotFoundException('Users not found');
    const usersToReturn: CreateUserDto[] = users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image || '',
        role: user.role as UserRole,
        position: user.position || '',
      };
    });
    return usersToReturn;
  }

  async findOne(id: string) {
    const user = await this.userRepository.getUserById(id);

    if (!user) throw new NotFoundException('User not found');

    const userToReturn: CreateUserDto = {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image || '',
      role: user.role as UserRole,
      position: user.position || '',
    };

    return userToReturn;
  }

  remove(id: string) {
    return this.userRepository.deleteUser(id);
  }
}
