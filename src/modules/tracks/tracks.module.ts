import { Module } from '@nestjs/common';
import { TracksController } from './controllers/tracks.controller';
import { TracksService } from './services/tracks.service';
import { TracksRepository } from './repositories/tracks.repository';

@Module({
  controllers: [TracksController],
  providers: [TracksService, TracksRepository],
  exports: [TracksService],
})
export class TracksModule {}
