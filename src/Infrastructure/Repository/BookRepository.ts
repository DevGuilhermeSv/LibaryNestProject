import { Injectable } from '@nestjs/common';
import Repository from './Repository';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Query, Schema } from 'mongoose';
import { BookDto } from 'src/Application/Dto/Book.dto';
import { Book } from '../Schema/Book.schema';
@Injectable()
export class BookRepository extends Repository<Book> {
  constructor(@InjectModel(Book.name) private readonly bookModel: Model<Book>) {
    super(bookModel);
  }
  getBook(id: any): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }
  updateBook(id: any, item: BookDto) {
    return this.bookModel.findByIdAndUpdate(id, item);
  }
}
