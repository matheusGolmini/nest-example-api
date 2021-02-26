import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsPhoneNumber('BR')
  @ApiProperty()
  phone: string;

  @MinLength(4)
  @ApiProperty()
  name: string;

  @MinLength(6)
  @ApiProperty()
  password: string;
}
