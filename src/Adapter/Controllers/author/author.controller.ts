import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuthorDto } from 'src/Application/Dto/Author.dto';
import { AuthorService } from 'src/Application/services/author/author.service';
import IAuthor from 'src/Domain/Interfaces/IAuthor';
import { Author } from 'src/Infrastructure/Schema/Author.schema';
@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
  @Get()
  getAll() {}
  @Post()
  async createBook(@Body() authorDto: AuthorDto): Promise<Author> {
    console.log(authorDto);
    return await this.authorService.create(authorDto);
  }
  @Put()
  update() {}
  @Delete()
  delete() {}
}
