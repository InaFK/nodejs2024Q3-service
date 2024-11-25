import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { validate as isUuid } from 'uuid';
import { Artist } from '../entities/artist.entity';
import { ArtistsRepository } from '../repositories/artists.repository';

@Injectable()
export class ArtistsService {
  constructor(private readonly artistsRepository: ArtistsRepository) {}

  getAllArtists(): Artist[] {
    return this.artistsRepository.findAll();
  }

  getArtistById(id: string): Artist {
    if (!isUuid(id)) {
      throw new BadRequestException('Invalid artist ID');
    }

    const artist = this.artistsRepository.findById(id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }

    return artist;
  }

  createArtist(name: string, grammy: boolean): Artist {
    if (!name || grammy === undefined) {
      throw new BadRequestException('Name and grammy are required');
    }

    const artist = new Artist(name, grammy);
    return this.artistsRepository.create(artist);
  }

  updateArtist(id: string, updates: Partial<Omit<Artist, 'id'>>): Artist {
    if (!isUuid(id)) {
      throw new BadRequestException('Invalid artist ID');
    }

    const artist = this.artistsRepository.update(id, updates);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }

    return artist;
  }

  deleteArtist(id: string): void {
    if (!isUuid(id)) {
      throw new BadRequestException('Invalid artist ID');
    }

    const deleted = this.artistsRepository.delete(id);
    if (!deleted) {
      throw new NotFoundException('Artist not found');
    }
  }
}
