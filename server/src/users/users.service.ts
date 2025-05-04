import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRole } from 'src/shared/types/users.types';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  async create(userData: Prisma.UserCreateInput): Promise<{
    message: string;
    user: CreateUserDto;
  }> {
    const existing = await this.userRepository.getUserByEmail(userData.email);

    if (existing) {
      return {
        message: 'User already exists',
        user: {
          id: existing.id,
          email: existing.email,
          name: existing.name,
          image: existing.image || '',
          role: existing.role as UserRole,
          position: existing.position || undefined,
          seniority: existing.seniority || undefined,
          phoneNumber: existing.phoneNumber || '',
          address: existing.address || '',
          dni: existing.dni || '',
          startDate: existing.startDate || undefined,
          endDate: existing.endDate || undefined,
        },
      };
    }

    const created = await this.userRepository.createUser(userData);

    return {
      message: 'User created successfully',
      user: {
        id: created.id,
        email: created.email,
        name: created.name,
        image: created.image || '',
        role: created.role as UserRole,
        position: undefined,
        seniority: undefined,
        phoneNumber: '',
        address: '',
        dni: '',
        startDate: undefined,
        endDate: undefined,
      },
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
        seniority: user.seniority || '',
        phoneNumber: user.phoneNumber || '',
        address: user.address || '',
        dni: user.dni || '',
        startDate: user.startDate || undefined,
        endDate: user.endDate || undefined,
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
      seniority: user.seniority || '',
      phoneNumber: user.phoneNumber || '',
      address: user.address || '',
      dni: user.dni || '',
      startDate: user.startDate || undefined,
      endDate: user.endDate || undefined,
    };

    return userToReturn;
  }

  remove(id: string) {
    return this.userRepository.deleteUser(id);
  }

  async updateOne(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<{
    message: string;
    user: CreateUserDto;
  }> {
    const existingUser = await this.userRepository.getUserById(userId);
    if (!existingUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, email, ...updateData } = updateUserDto;

    const updatedUser = await this.userRepository.updateUser(
      userId,
      updateData,
    );

    return {
      message: 'User updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        image: updatedUser.image || '',
        role: updatedUser.role as UserRole,
        position: updatedUser.position || '',
        seniority: updatedUser.seniority || '',
        phoneNumber: updatedUser.phoneNumber || '',
        address: updatedUser.address || '',
        dni: updatedUser.dni || '',
        startDate: updatedUser.startDate || undefined,
        endDate: updatedUser.endDate || undefined,
      },
    };
  }
}
