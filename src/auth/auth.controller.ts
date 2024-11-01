import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserEntity } from 'src/entities/user-entity';
import { UsersService } from 'src/users/users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('signup')
  async signup(
    @Body()
    userDTO: CreateUserDTO,
  ): Promise<UserEntity> {
   try {
    console.log(`### HERE controller 1:`);
    return await this.userService.create(userDTO);
   } catch (error) {
    throw new HttpException(error.driverError.detail,HttpStatus.BAD_REQUEST)
   }
  }
  //

  @Post('login')
  login(
    @Body()
    loginDTO: LoginDTO,
  ) {
    return this.authService.login(loginDTO);
  }
}
