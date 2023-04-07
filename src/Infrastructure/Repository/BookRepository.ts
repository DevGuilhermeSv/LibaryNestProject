import { Injectable } from '@nestjs/common';
import Repository from './Repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDto } from 'src/Application/Dto/Book.dto';
import { IBook } from 'src/Domain/Interfaces/IBook';
@Injectable()
export class BookRepository extends Repository<IBook> {
  constructor(@InjectModel('book') private readonly bookModel: Model<IBook>) {
    super(bookModel);
  }
  getBook(id: any): Promise<BookDto> {
    return this.bookModel.findById(id).exec();
  }
}
