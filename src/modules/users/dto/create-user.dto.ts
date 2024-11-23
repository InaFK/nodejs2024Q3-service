// import { IsString, IsNotEmpty } from 'class-validator';

// export class CreateUserDto {
//   @IsString()
//   @IsNotEmpty()
//   login: string;

//   @IsString()
//   @IsNotEmpty()
//   password: string;
// }


import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Login is required' })
  login: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}

// import { IsString, IsNotEmpty } from 'class-validator';

// export class CreateUserDto {
//   @IsString()
//   @IsNotEmpty()
//   login: string;

//   @IsString()
//   @IsNotEmpty()
//   password: string;
// }
