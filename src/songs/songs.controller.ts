import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dtos/create-song.dto';
import { UpdateSongDto } from './dtos/update-song.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { SongEntity } from './entities/song-entity';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  /*@Get()
  findAllSong() {
    try {
      return this.songsService.findAllSong();
    } catch (e) {
      throw new HttpException(
        `Server songs error : ${e}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }*/

  @Get()
  async findAllSong(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<SongEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.songsService.paginate({
      page,
      limit,
    });
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.songsService.getSong(id);
  }

  @Post()
  createSong(@Body() song: CreateSongDto) {
    try {
      return this.songsService.createSong(song);
    } catch (error) {
      return new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: error,
      });
    }
  }

  @Put(':id')
  updateSong(@Param('id', new ParseIntPipe()) id: number,@Body() updateSongDto:UpdateSongDto) {
    return this.songsService.updateSong(id,updateSongDto);
  }

  @Delete(':id')
  deleteSong(@Param('id', new ParseIntPipe()) id: number) {
    return this.songsService.deleteSong(id);
  }


  
}
