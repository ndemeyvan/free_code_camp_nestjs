import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { SongsController } from './songs/songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongEntity } from './songs/entities/song-entity';
import { ArtistEntity } from './entities/artist-entity';
import { UserEntity } from './entities/user-entity';

@Module({
  imports: [
    SongsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'root',
      entities: [SongEntity, ArtistEntity, UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
// implementer NestModele afin d'override configure et appeler notre middle ware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes("songs");
    // consumer.apply(LoggerMiddleware).forRoutes({path:"songs",method:RequestMethod.POST});// uniquement sur les requet post
    consumer.apply(LoggerMiddleware).forRoutes(SongsController); // specifier directement le controller
  }
}
