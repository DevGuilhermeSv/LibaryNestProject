import { Injectable } from '@nestjs/common';
import IBooksService from 'src/Domain/Interfaces/services/IBooks.services';
import { BookDto } from '../../Dto/Book.dto';

@Injectable()
export class BooksService implements IBooksService {
  getAll(): [] {
    throw new Error('Method not implemented.');
  }
  getBook(): BookDto {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
}
