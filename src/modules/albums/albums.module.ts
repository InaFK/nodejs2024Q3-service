import { Module } from '@nestjs/common';
import { AlbumsController } from './controllers/albums.controller';
import { AlbumsService } from './services/albums.service';
import { AlbumsRepository } from './repositories/albums.repository';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService, AlbumsRepository],
})
export class AlbumsModule {}
