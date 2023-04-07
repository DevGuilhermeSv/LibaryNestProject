import { Injectable } from '@nestjs/common';
import { BookDto } from '../../Dto/Book.dto';
import { BookRepository } from 'src/Infrastructure/Repository/BookRepository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}
  getAll(): [] {
    throw new Error('Method not implemented.');
  }
  getBook(): BookDto {
    return new BookDto();
  }
  update() {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
}
