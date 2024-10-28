import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsArray()
  artists: string[];

  @IsNotEmpty()
  @IsMilitaryTime()
  duration: Date;

  @IsNotEmpty()
  @IsDateString()
  releaseDate: Date;
}
