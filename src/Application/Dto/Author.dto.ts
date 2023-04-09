import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(100)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  readonly surname: string;
}
