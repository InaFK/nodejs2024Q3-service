import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTrackDto } from './create-track.dto';

export class UpdateTrackDto extends PartialType(CreateTrackDto) {
  @ApiProperty({ example: 'Updated Track Name', required: false })
  name?: string;
}
