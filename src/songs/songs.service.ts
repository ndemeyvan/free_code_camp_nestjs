import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dtos/create-song.dto';

@Injectable()
export class SongsService {
  private songs = [];

  findAllSong() {
    return this.songs;
  }

  createSong(song:CreateSongDto) {
    this.songs.push(song);
    return this.songs;
  }

  getSong() {
    return 'get a specific song';
  }

  deleteSong() {
    return ' delete song';
  }

  updateSong() {
    return ' Update song';
  }
}
