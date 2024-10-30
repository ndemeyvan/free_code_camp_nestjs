import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dtos/create-song.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { SongEntity } from './entities/song-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateSongDto } from './dtos/update-song.dto';

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
    newSong.artists = song.artists;
    newSong.duration = song.duration;
    newSong.lyrics = song.lyrics;
    newSong.releaseDate = song.releaseDate;
    newSong.title = song.title;
    return await this.songRepository.save(newSong);
  }

  async getSong(id: number): Promise<SongEntity> {
    return await this.songRepository.findOneBy({ id: id });
  }

  async deleteSong(id: number): Promise<DeleteResult> {
    return await this.songRepository.delete({ id: id });
  }

  async updateSong(
    id: number,
    updateSongDto: UpdateSongDto,
  ): Promise<UpdateResult> {
    return await this.songRepository.update({ id: id }, updateSongDto);
  }
}
