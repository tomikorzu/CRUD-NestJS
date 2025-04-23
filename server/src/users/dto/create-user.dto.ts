import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username is required' })
  @MinLength(4, { message: 'Username must be at least 4 characters' })
  @MaxLength(20, { message: 'Username must be at most 20 characters' })
  username: string;

  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MaxLength(50, { message: 'Password must be at most 50 characters' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;
}
