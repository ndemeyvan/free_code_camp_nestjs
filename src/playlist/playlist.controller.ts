import { Body, Controller, Post } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlayListDto } from './dto/create-playlist.dto';
import { PlaylistEntity } from 'src/entities/playlist-entity';

@Controller('playlist')
export class PlaylistController {
  constructor(private playListService: PlaylistService) {}
  @Post()
  create(
    @Body()
    playlistDTO: CreatePlayListDto,
  ): Promise<PlaylistEntity> {
    return this.playListService.create(playlistDTO);
  }
}
