import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested, isPositive } from "class-validator";
import { AuthorDto } from "./Author.dto";
import { Type } from "class-transformer";

export class BookDto{

    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    readonly name: string;

    @IsNotEmpty()
    @Type(()=>AuthorDto)
    @ValidateNested({each:true, message:"Author need be valid"})
    readonly author: AuthorDto[];

    @IsString()
    @MaxLength(30)
    readonly language: string;

    @IsPositive()
    readonly releaseYear: number;
    readonly publisher: string;

    @IsNumber()
    @IsPositive()
    readonly pages: number;
}