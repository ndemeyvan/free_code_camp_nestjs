import { ArtistEntity } from 'src/entities/artist-entity';
import { PlaylistEntity } from 'src/entities/playlist-entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('songs')
export class SongEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  lyrics: string;
  
  @Column({ type: 'timestamp' })
  releaseDate: Date;

  @Column('int')
  duration: number;

  @ManyToOne(() => PlaylistEntity, (playList) => playList.songs)
  playList: PlaylistEntity;

  @ManyToMany(() => ArtistEntity, (artist) => artist.songs,{cascade:true})
  @JoinTable({ name: 'songs_artists' })
  artists: ArtistEntity[];
}
