import {
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user-entity';
import { SongEntity } from 'src/songs/entities/song-entity';

@Entity('artists')
export class ArtistEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserEntity)   
  @JoinColumn()
  user: UserEntity;

  @ManyToMany(() => SongEntity, (song) => song.artists)
  songs: SongEntity[];
}
