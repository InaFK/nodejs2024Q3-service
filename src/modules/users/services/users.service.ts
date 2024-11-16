import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { User, UserResponse } from '../entities/user.entity';
//import { UpdatePasswordDto } from '../dto/update-password.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findOne(id: string): UserResponse {
    const user = this.usersRepository.findById(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user.toResponse();
  }

  create(login: string, password: string): UserResponse {
    const newUser = this.usersRepository.createUser(login, password);
    return newUser.toResponse();
  }

  update(id: string, updatedFields: Partial<User>): UserResponse {
    const updatedUser = this.usersRepository.updateUser(id, updatedFields);
    return updatedUser.toResponse();
  }

  remove(id: string): void {
    this.usersRepository.deleteUser(id);
  }

  findAll(): UserResponse[] {
    return this.usersRepository.getAllUsers().map(user => user.toResponse());
  }
}
