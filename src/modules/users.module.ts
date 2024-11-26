import { Module } from '@nestjs/common';
import { UsersController } from './users/controllers/users.controller';
import { UsersService } from './users//services/users.service';
import { UsersRepository } from './users/repositories/users.repository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
