import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { TracksRepository } from '../repositories/tracks.repository';
import { Track } from '../entities/track.entity';
import { validate as isUUID } from 'uuid';

@Injectable()
export class TracksService {
  constructor(private readonly tracksRepository: TracksRepository) {}

  findAll(): Track[] {
    return this.tracksRepository.findAll();
  }

  findById(id: string): Track {
    if (!isUUID(id)) {
      throw new BadRequestException('Invalid track ID');
    }

    const track = this.tracksRepository.findById(id);
    if (!track) {
      throw new NotFoundException('Track not found');
    }

    return track;
  }

  create(trackData: Partial<Track>): Track {
    const { name, duration, artistId, albumId } = trackData;

    if (!name || typeof duration !== 'number') {
      throw new BadRequestException(
        'Missing required fields: name or duration',
      );
    }

    if (artistId && !isUUID(artistId)) {
      throw new BadRequestException('Invalid artist ID');
    }

    if (albumId && !isUUID(albumId)) {
      throw new BadRequestException('Invalid album ID');
    }

    return this.tracksRepository.create(trackData);
  }

  update(id: string, updateData: Partial<Track>): Track {
    const { name, duration, artistId, albumId } = updateData;

    if (artistId && !isUUID(artistId)) {
      throw new BadRequestException('Invalid artist ID');
    }

    if (albumId && !isUUID(albumId)) {
      throw new BadRequestException('Invalid album ID');
    }

    return this.tracksRepository.update(id, updateData);
  }

  delete(id: string): void {
    if (!isUUID(id)) {
      throw new BadRequestException('Invalid track ID');
    }

    const deleted = this.tracksRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException('Track not found');
    }
  }
}
