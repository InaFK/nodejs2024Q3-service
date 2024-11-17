import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { TracksService } from '../services/tracks.service';
import { Track } from '../entities/track.entity';

@Controller('track')
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
  createTrack(@Body() trackData: Partial<Track>): Track {
    return this.tracksService.create(trackData);
  }

  @Put(':id')
  updateTrack(@Param('id') id: string, @Body() updateData: Partial<Track>): Track {
    return this.tracksService.update(id, updateData);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTrack(@Param('id') id: string): void {
    this.tracksService.delete(id);
  }
}
