import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty({ description: 'The user\'s old password', example: 'oldpassword' })
  oldPassword: string;

  @ApiProperty({ description: 'The user\'s new password', example: 'newpassword' })
  newPassword: string;
}

// import { IsString, IsNotEmpty } from 'class-validator';

// export class UpdatePasswordDto {
//   @IsString()
//   @IsNotEmpty()
//   oldPassword: string;

//   @IsString()
//   @IsNotEmpty()
//   newPassword: string;
// }

// import { IsString, IsNotEmpty } from 'class-validator';

// export class UpdatePasswordDto {
//   @IsString()
//   @IsNotEmpty({ message: 'Old password is required' })
//   oldPassword: string;

//   @IsString()
//   @IsNotEmpty({ message: 'New password is required' })
//   newPassword: string;
// }

// import { IsString, IsNotEmpty } from 'class-validator';

// export class UpdatePasswordDto {
//   @IsString()
//   @IsNotEmpty()
//   oldPassword: string;

//   @IsString()
//   @IsNotEmpty()
//   newPassword: string;
// }
