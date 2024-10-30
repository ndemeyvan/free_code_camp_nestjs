import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsOptional,
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
  duration: number;

  @IsNotEmpty()
  @IsDateString()
  releaseDate: Date;

  @IsString()
  @IsOptional()
  lyrics: string;
}
