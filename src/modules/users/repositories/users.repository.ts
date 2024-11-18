import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

export class UsersRepository {
  private users: User[] = [];

  /**
   * Get all users
   * @returns Array of all User instances
   */
  getAllUsers(): User[] {
    return this.users;
  }

  /**
   * Find a user by ID
   * @param id User ID
   * @returns User instance or undefined
   */
  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  /**
   * Find a user by login
   * @param login User login
   * @returns User instance or undefined
   */
  findByLogin(login: string): User | undefined {
    return this.users.find((user) => user.login === login);
  }

  /**
   * Create a new user
   * @param login User login
   * @param password User password
   * @returns Newly created User instance
   */
  createUser(login: string, password: string): User {
    const timestamp = Date.now();
    const newUser: User = {
      id: uuidv4(),
      login,
      password,
      version: 1,
      createdAt: timestamp,
      updatedAt: timestamp,
      toResponse: () => ({
        id: newUser.id,
        login: newUser.login,
        version: newUser.version,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      }),
    };

    this.users.push(newUser);
    return newUser;
  }

  /**
   * Update a user
   * @param id User ID
   * @param updatedFields Partial user data to update
   * @returns Updated User instance
   */
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

  /**
   * Delete a user
   * @param id User ID
   */
  deleteUser(id: string): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error(`User with id ${id} not found`);
    }

    this.users.splice(index, 1);
  }
}
