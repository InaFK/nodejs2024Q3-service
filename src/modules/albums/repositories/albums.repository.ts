import { Injectable } from '@nestjs/common';
import { Album } from '../entities/album.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AlbumsRepository {
  private albums: Album[] = [];

  findAll(): Album[] {
    return this.albums;
  }

  findById(id: string): Album | undefined {
    return this.albums.find(album => album.id === id);
  }

  create(albumData: Omit<Album, 'id'>): Album {
    const newAlbum = { id: uuidv4(), ...albumData };
    this.albums.push(newAlbum);
    return newAlbum;
  }

  update(id: string, updatedData: Partial<Album>): Album | undefined {
    const album = this.findById(id);
    if (!album) return undefined;

    Object.assign(album, updatedData);
    return album;
  }

  delete(id: string): boolean {
    const index = this.albums.findIndex(album => album.id === id);
    if (index === -1) return false;

    this.albums.splice(index, 1);
    return true;
  }
}
