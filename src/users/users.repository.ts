import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUsers(): Promise<Prisma.UserCreateInput[] | []> {
    const users = await this.prisma.user.findMany();

    if (users.length === 0) {
      throw new NotFoundException('No users found');
    }
    return users;
  }

  async getUserById(id: number): Promise<Prisma.UserCreateInput | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (user === null) throw new NotFoundException('User not found');
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
  async getUserByEmail(email: string): Promise<Prisma.UserCreateInput | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (user === null) throw new NotFoundException('User not found');
    return user;
  }

  async createUser(
    user: Prisma.UserCreateInput,
  ): Promise<Prisma.UserCreateInput> {
    const existingEmail = await this.prisma.user.findUnique({
      where: { email: user.email },
    });
    const existingUsername = await this.prisma.user.findFirst({
      where: { username: user.username },
    });
    if (existingEmail) throw new BadRequestException('Email already exists');

    if (existingUsername)
      throw new BadRequestException('Username already exists');

    const passwordHashed = await bcrypt.hash(user.password, 10);
    return this.prisma.user.create({
      data: {
        ...user,
        password: passwordHashed,
      },
    });
  }

  updateUser(
    id: number,
    data: Prisma.UserUpdateInput,
  ): Promise<Prisma.UserUpdateInput> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async removeUser(id: number): Promise<Prisma.UserCreateInput | null> {
    const user = await this.getUserById(id);
    if (user === null) throw new NotFoundException('User not found');
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
