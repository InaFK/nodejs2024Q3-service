import { Injectable } from '@nestjs/common';
import { Track } from '../entities/track.entity';

@Injectable()
export class TracksRepository {
  private tracks: Track[] = [];

  findAll(): Track[] {
    return this.tracks;
  }

  findById(id: string): Track | undefined {
    return this.tracks.find((track) => track.id === id);
  }

  create(track: Partial<Track>): Track {
    const newTrack = new Track(track);
    this.tracks.push(newTrack);
    return newTrack;
  }

  update(id: string, updateData: Partial<Track>): Track | undefined {
    const trackIndex = this.tracks.findIndex((track) => track.id === id);
    if (trackIndex === -1) return undefined;

    this.tracks[trackIndex] = { ...this.tracks[trackIndex], ...updateData };
    return this.tracks[trackIndex];
  }

  delete(id: string): boolean {
    const initialLength = this.tracks.length;
    this.tracks = this.tracks.filter((track) => track.id !== id);
    return this.tracks.length < initialLength;
  }
}
