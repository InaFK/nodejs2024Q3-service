import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class UsersRepository {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  findById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  createUser(login: string, password: string): User {
    const timestamp = Date.now();
    const newUser: User = {
      id: uuidv4(),
      login,
      password,
      version: 1,
      createdAt: timestamp,
      updatedAt: timestamp,
      toResponse: () => {
        const { password, ...response } = newUser;
        return response;
      },
    };

    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updatedFields: Partial<User>): User {
    const user = this.findById(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    Object.assign(user, updatedFields, {
      version: user.version + 1,
      updatedAt: Date.now(),
    });
    return user;
  }

  deleteUser(id: string): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error(`User with id ${id} not found`);
    }

    this.users.splice(index, 1);
  }
}
