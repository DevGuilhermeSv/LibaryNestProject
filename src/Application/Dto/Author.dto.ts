import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  maxLength,
} from 'class-validator';

export class AuthorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly name;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly surname;
}
