import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongEntity } from './entities/song-entity';
import { ArtistEntity } from 'src/entities/artist-entity';
import { PlaylistService } from 'src/playlist/playlist.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([SongEntity, ArtistEntity])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
