import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlaylistEntity } from './playlist-entity';
import { Exclude } from 'class-transformer';

@Entity('users')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;
  
  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => PlaylistEntity, (playList) => playList.user)
  playLists: PlaylistEntity[];

}
