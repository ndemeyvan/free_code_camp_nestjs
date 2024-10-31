import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user-entity';
import { SongEntity } from 'src/songs/entities/song-entity';

@Entity('playlists')
export class PlaylistEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;
  /**
   * Each Playlist will have multiple songs
   */

  @OneToMany(() => SongEntity, (song) => song.playList)
  songs: SongEntity[];

  /**
   * Many Playlist can belong to a single unique user
   */
  @ManyToOne(() => UserEntity, (user) => user.playLists)
  user: UserEntity;

}
