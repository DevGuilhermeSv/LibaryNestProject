import { Injectable } from '@nestjs/common';
import { AuthorDto } from 'src/Application/Dto/Author.dto';
import IAuthor from 'src/Domain/Interfaces/IAuthor';
import { AuthorRepository } from 'src/Infrastructure/Repository/AuthorRepository';
import { Author } from 'src/Infrastructure/Schema/Author.schema';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  getAll(): [] {
    throw new Error('Method not implemented.');
  }
  getAuthor(): AuthorDto {
    throw new Error('Method not implemented.');
  }
  async create(authorDto: AuthorDto) {
    const author = this.transform(authorDto);
    return await this.authorRepository.create(author);
  }

  update() {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
  private transform(authorDto: AuthorDto) {
    const author = new Author();
    author.name = authorDto.name;
    author.surname = authorDto.surname;
    return author;
  }
}
