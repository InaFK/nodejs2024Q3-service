// export class User {
//   id: string;
//   login: string;
//   password: string;
//   version: number; // Increments on update
//   createdAt: number;
//   updatedAt: number;

//   constructor(partial: Partial<User>) {
//     Object.assign(this, partial);
//   }

//   //- method to exclude the password
//   toResponse(): UserResponse {
//     const { password, toResponse, ...response } = this as User;
//     return response;
//   }
// }

// type UserResponse = Omit<User, 'password' | 'toResponse'>;

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
