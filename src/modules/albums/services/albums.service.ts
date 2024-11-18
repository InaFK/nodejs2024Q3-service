import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { AlbumsRepository } from '../repositories/albums.repository';
import { Album } from '../entities/album.entity';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';
import { validate as isUuid } from 'uuid';

@Injectable()
export class AlbumsService {
  constructor(private readonly albumsRepository: AlbumsRepository) {}

  findAll(): Album[] {
    return this.albumsRepository.findAll();
  }

  findById(id: string): Album {
    if (!isUuid(id)) {
      throw new BadRequestException('Invalid UUID');
    }

    const album = this.albumsRepository.findById(id);
    if (!album) {
      throw new NotFoundException('Album not found');
    }

    return album;
  }

  create(createAlbumDto: CreateAlbumDto): Album {
    return this.albumsRepository.create(createAlbumDto);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto): Album {
    if (!isUuid(id)) {
      throw new BadRequestException('Invalid UUID');
    }

    const updatedAlbum = this.albumsRepository.update(id, updateAlbumDto);
    if (!updatedAlbum) {
      throw new NotFoundException('Album not found');
    }

    return updatedAlbum;
  }

  delete(id: string): void {
    if (!isUuid(id)) {
      throw new BadRequestException('Invalid UUID');
    }

    const isDeleted = this.albumsRepository.delete(id);
    if (!isDeleted) {
      throw new NotFoundException('Album not found');
    }
  }
}
