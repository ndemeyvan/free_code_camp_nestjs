import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/entities/user-entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcryptjs";
import { LoginDTO } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
  async login(loginDTO: LoginDTO): Promise<UserEntity> {
    const user = await this.userService.findOne(loginDTO); // 1.
    const passwordMatched = await bcrypt.compare(
      loginDTO.password,
      user.password,
    ); // 2.
    if (passwordMatched) {
      // 3.
      delete user.password; // 4.
      return user;
    } else {
      throw new UnauthorizedException('Incorrect user or password'); // 5.
    }
  }
}
