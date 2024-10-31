import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/auth/dto/create-user.dto';
import { UserEntity } from 'src/entities/user-entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { LoginDTO } from 'src/auth/dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  //
  async create(userDTO: CreateUserDTO): Promise<UserEntity> {
    const salt = await bcrypt.genSalt(); // 2.
    userDTO.password = await bcrypt.hash(userDTO.password, salt); // 3.
    const user = await this.userRepository.save(userDTO); // 4.
    delete user.password; // 5.
    return user; // 6.
  }
  //

  async findOne(loginDTO: LoginDTO): Promise<UserEntity> {
    const user: UserEntity = await this.userRepository.findOneBy({
      email: loginDTO.email,
    });
    return user;
  }
}
