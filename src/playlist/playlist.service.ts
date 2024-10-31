import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlaylistEntity } from 'src/entities/playlist-entity';
import { UserEntity } from 'src/entities/user-entity';
import { SongEntity } from 'src/songs/entities/song-entity';
import { Repository } from 'typeorm';
import { CreatePlayListDto } from './dto/create-playlist.dto';

@Injectable()
export class PlaylistService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(SongEntity)
    private songsRepository: Repository<SongEntity>,
    @InjectRepository(PlaylistEntity)
    private playListRepository: Repository<PlaylistEntity>,
  ) {}

  async create(playListDTO: CreatePlayListDto): Promise<PlaylistEntity> {
    const playList = new PlaylistEntity();
    playList.name = playListDTO.name;
    // songs will be the array of IDs that we are getting from the DTO object
    const songs = await this.songsRepository.findByIds(playListDTO.songs);
    //Set the relation for the songs with the playlist entity
    playList.songs = songs;
    // A user will be the ID of the user we are getting from the request
    //When we implemented the user authentication this id will become the logged     in user id
    const user = await this.userRepository.findOneBy({ id: playListDTO.user });
    playList.user = user;
    return await this.playListRepository.save(playList);
  }
}
