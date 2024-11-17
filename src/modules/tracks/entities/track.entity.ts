import { v4 as uuidv4 } from 'uuid';

export class Track {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;

  constructor(partial: Partial<Track>) {
    this.id = partial.id || uuidv4();
    this.name = partial.name || '';
    this.artistId = partial.artistId ?? null; //- set to null if undefined
    this.albumId = partial.albumId ?? null;
    this.duration = partial.duration || 0;
  }
}
