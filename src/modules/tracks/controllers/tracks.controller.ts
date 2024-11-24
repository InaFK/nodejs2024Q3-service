import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { TracksService } from '../services/tracks.service';
import { Track } from '../entities/track.entity';
import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Get()
  getAllTracks(): Track[] {
    return this.tracksService.findAll();
  }

  @Get(':id')
  getTrackById(@Param('id') id: string): Track {
    return this.tracksService.findById(id);
  }

  @Post()
  @HttpCode(201)
  createTrack(@Body() trackData: CreateTrackDto): Track {
    return this.tracksService.create(trackData);
  }

  @Put(':id')
  updateTrack(
    @Param('id') id: string,
    @Body() updateData: UpdateTrackDto,
  ): Track {
    return this.tracksService.update(id, updateData);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTrack(@Param('id') id: string): void {
    this.tracksService.delete(id);
  }
}
