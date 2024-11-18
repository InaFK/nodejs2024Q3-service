import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { UserResponse } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdatePasswordDto } from '../dto/update-password.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  /**
   * Get all users
   * @returns Array of UserResponse
   */
  findAll(): UserResponse[] {
    return this.usersRepository.getAllUsers().map((user) => user.toResponse());
  }

  /**
   * Get a user by ID
   * @param id User ID
   * @returns UserResponse
   */
  findOne(id: string): UserResponse {
    const user = this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user.toResponse();
  }

  /**
   * Create a new user
   * @param createUserDto DTO containing login and password
   * @returns UserResponse
   */
  create(createUserDto: CreateUserDto): UserResponse {
    const { login, password } = createUserDto;

    //- validate unique login
    const existingUser = this.usersRepository.findByLogin(login);
    if (existingUser) {
      throw new BadRequestException(`Login "${login}" is already in use`);
    }

    const newUser = this.usersRepository.createUser(login, password);
    return newUser.toResponse();
  }

  /**
   * Update a user's password
   * @param id User ID
   * @param updatePasswordDto DTO containing old and new passwords
   * @returns Updated UserResponse
   */
  updatePassword(id: string, updatePasswordDto: UpdatePasswordDto): UserResponse {
    const { oldPassword, newPassword } = updatePasswordDto;

    const user = this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    //- validate old password
    if (user.password !== oldPassword) {
      throw new BadRequestException('Old password is incorrect');
    }

    const updatedUser = this.usersRepository.updateUser(id, { password: newPassword });
    return updatedUser.toResponse();
  }

  /**
   * Remove a user by ID
   * @param id User ID
   */
  remove(id: string): void {
    const user = this.usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    this.usersRepository.deleteUser(id);
  }
}
