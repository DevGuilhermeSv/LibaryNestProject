import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDto } from 'src/Application/Dto/Book.dto';
import { BooksService } from 'src/Application/services/books/books.service';
import { Book } from 'src/Infrastructure/Schema/Book.schema';
@Controller('books')
export class BooksController {
  private readonly bookService: BooksService;

  constructor(bookservice: BooksService) {
    this.bookService = bookservice;
  }
  @Get()
  async getAllBooks() {
    return await this.bookService.getAll();
  }
  @Get(':id')
  async getBook(@Param('id') id: any): Promise<Book> {
    return await this.bookService.getBook(id);
  }

  @Post()
  async createBook(@Body() bookDto: BookDto): Promise<Book> {
    return await this.bookService.create(bookDto);
  }
  @Put()
  updateBook() {}
  @Delete()
  deleteBook() {}
}

