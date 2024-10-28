import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAllSong() {
    return 'Find all songs';
  }

  @Get(':id')
  findOne() {
    return 'Find one songs';
  }

  @Post()
  createSong() {
    return 'create one songs';
  }

  @Delete(':id')
  deleteSong() {
    return `delete one songs `;
  }

  @Put(':id')
  updateSong() {
    return `update one songs `;
  }
}
