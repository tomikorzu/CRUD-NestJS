// src/users/dto/user-response.dto.ts
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserRole } from 'src/shared/types/users.types';

export class CreateUserDto {
  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  position?: string;

  @IsOptional()
  seniority?: string;

  @IsOptional()
  experienceYears?: number;

  @IsOptional()
  experienceMonths?: number;

  @IsOptional()
  experienceDays?: number;

  @IsOptional()
  phoneNumber?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  dni?: string;

  @IsOptional()
  startDate?: Date;

  @IsOptional()
  endDate?: Date;
}
