import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsNotEmpty } from 'class-validator';

export class CreateArtistDto {
  @ApiProperty({
    description: 'Name of the artist',
    example: 'Taylor Swift',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Whether the artist has a Grammy award',
    example: true,
  })
  @IsBoolean()
  grammy: boolean;
}
