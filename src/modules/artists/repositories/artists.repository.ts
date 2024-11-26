import { Injectable } from '@nestjs/common';
import { Artist } from '../entities/artist.entity';

@Injectable()
export class ArtistsRepository {
  private artists: Artist[] = [];

  findAll(): Artist[] {
    return this.artists;
  }

  findById(id: string): Artist | undefined {
    return this.artists.find((artist) => artist.id === id);
  }

  create(artist: Artist): Artist {
    this.artists.push(artist);
    return artist;
  }

  update(id: string, updates: Partial<Omit<Artist, 'id'>>): Artist | undefined {
    const artist = this.findById(id);
    if (artist) {
      Object.assign(artist, updates);
    }
    return artist;
  }

  delete(id: string): boolean {
    const index = this.artists.findIndex((artist) => artist.id === id);
    if (index !== -1) {
      this.artists.splice(index, 1);
      return true;
    }
    return false;
  }
}
