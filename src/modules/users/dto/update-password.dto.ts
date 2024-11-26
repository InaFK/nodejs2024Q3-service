import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty({ description: 'The user\'s old password', example: 'oldpassword' })
  oldPassword: string;

  @ApiProperty({ description: 'The user\'s new password', example: 'newpassword' })
  newPassword: string;
}
