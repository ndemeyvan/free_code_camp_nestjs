import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongEntity } from 'src/songs/entities/song-entity';
import { UserEntity } from 'src/entities/user-entity';
import { PlaylistEntity } from 'src/entities/playlist-entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaylistEntity, SongEntity, UserEntity])],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
