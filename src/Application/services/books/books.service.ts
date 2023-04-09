import { Injectable } from '@nestjs/common';
import { BookDto } from '../../Dto/Book.dto';
import { BookRepository } from 'src/Infrastructure/Repository/BookRepository';
import { IBook } from 'src/Domain/Interfaces/IBook';
import { instanceToInstance, plainToInstance } from 'class-transformer';
import IAuthor from 'src/Domain/Interfaces/IAuthor';
import { Book } from 'src/Infrastructure/Schema/Book.schema';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BookRepository) {}
  async getAll() {
    return await this.bookRepository.getAll()
  }
  async getBook(id: any): Promise<Book> {
    return await this.bookRepository.getBook(id);
  }

  async update(id: any, data: BookDto): Promise<Book> {
    const book = this.transform(data);
    return await this.bookRepository.update(id, book);
  }
  async create(data: BookDto): Promise<Book> {
    const book = this.transform(data);
    return await this.bookRepository.create(book);
  }

  delete(): void {
    throw new Error('Method not implemented.');
  }
  private transform(bookDto: BookDto): Book {
    const book = new Book();
    book.name = bookDto.name;
    book.authorId = bookDto.authorId;
    book.language = bookDto.language;
    book.releaseYear = bookDto.releaseYear;
    book.publisher = bookDto.publisher;
    book.pages = bookDto.pages;
    return book;
  }
}
