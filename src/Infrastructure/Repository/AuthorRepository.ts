import { Injectable } from '@nestjs/common';
import Repository from './IRepository';

@Injectable()
export class AuthorRepository extends Repository<'Author'> {
  getAll(): Promise<'Author'[]> {
    throw new Error('Method not implemented.');
  }
  create(item: 'Author'): Promise<'Author'> {
    throw new Error('Method not implemented.');
  }
  update(id: string, item: 'Author') {
    throw new Error('Method not implemented.');
  }
}
