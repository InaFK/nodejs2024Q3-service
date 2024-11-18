import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ArtistsService } from '../services/artists.service';
import { Artist } from '../entities/artist.entity';

@Controller('artist')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  getAllArtists(): Artist[] {
    return this.artistsService.getAllArtists();
  }

  @Get(':id')
  getArtistById(@Param('id') id: string): Artist {
    return this.artistsService.getArtistById(id);
  }

  @Post()
  createArtist(@Body('name') name: string, @Body('grammy') grammy: boolean): Artist {
    return this.artistsService.createArtist(name, grammy);
  }

  @Put(':id')
  updateArtist(
    @Param('id') id: string,
    @Body() updates: Partial<Omit<Artist, 'id'>>,
  ): Artist {
    return this.artistsService.updateArtist(id, updates);
  }

  @Delete(':id')
  deleteArtist(@Param('id') id: string): void {
    this.artistsService.deleteArtist(id);
  }
}
