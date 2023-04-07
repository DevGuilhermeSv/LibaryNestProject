import { Injectable } from '@nestjs/common';
import { AuthorDto } from 'src/Application/Dto/Author.dto';
import { AuthorRepository } from 'src/Infrastructure/Repository/AuthorRepository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}
  getAll(): [] {
    throw new Error('Method not implemented.');
  }
  getAuthor(): AuthorDto {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
}
