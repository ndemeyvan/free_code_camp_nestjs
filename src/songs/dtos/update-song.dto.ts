import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateSongDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  readonly artists;

  @IsOptional()
  @IsNumber()
  duration: number;

  @IsDateString()
  @IsOptional()
  releaseDate: Date;

  @IsString()
  @IsOptional()
  lyrics: string;
}
