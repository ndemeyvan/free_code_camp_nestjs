import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dtos/create-song.dto';
import { Repository } from 'typeorm';
import { SongEntity } from './entities/song-entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(SongEntity)
    private songRepository: Repository<SongEntity>,
  ) {}

  async findAllSong(): Promise<SongEntity[]> {
    return await this.songRepository.find();
  }

  async createSong(song: CreateSongDto): Promise<SongEntity> {
    const newSong = new SongEntity();
    newSong.artits = song.artists;
    newSong.duration = song.duration;
    newSong.lyrics = song.lyrics;
    newSong.releaseDate = song.releaseDate;
    newSong.title = song.title;
    return await this.songRepository.save(newSong);
  }

  async getSong(id: number): Promise<SongEntity> {
    return await this.songRepository.findOneBy({ id: id });
  }

  deleteSong(id: number) {
    return this.songRepository.delete({ id: id });
  }

  updateSong(id: number) {
    return ' Update song';
  }
}
