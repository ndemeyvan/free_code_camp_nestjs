import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dtos/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAllSong() {
    return this.songsService.findAllSong();
  }

  @Get(':id')
  findOne() {
    return this.songsService.getSong();
  }

  @Post()
  createSong(@Body() song: CreateSongDto) {
    return this.songsService.createSong(song);
  }

  @Put(':id')
  updateSong() {
    return this.songsService.updateSong();
  }

  @Delete(':id')
  deleteSong() {
    return this.songsService.deleteSong();
  }
}
