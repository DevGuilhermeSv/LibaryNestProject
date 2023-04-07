import { Injectable } from '@nestjs/common';
import Repository from './IRepository';
import { Book } from 'src/Domain/Entities/Book';
@Injectable()
export class BookRepository extends Repository<'Book'> {
  getAll(): Promise<'Book'[]> {
    throw new Error('Method not implemented.');
  }
  create(item: 'Book'): Promise<'Book'> {
    throw new Error('Method not implemented.');
  }
  update(id: string, item: 'Book') {
    throw new Error('Method not implemented.');
  }
}
