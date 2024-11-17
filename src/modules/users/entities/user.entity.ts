export class User {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  toResponse(): UserResponse {
    const { password, ...response } = this;
    return response as UserResponse;
  }
}

export type UserResponse = Omit<User, 'password' | 'toResponse'>;
