import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookDto } from 'src/Application/Dto/Book.dto';
import { BooksService } from 'src/Application/services/books/books.service';
@Controller('books')
export class BooksController {
  private readonly bookService: BooksService;

  constructor(bookservice: BooksService) {
    this.bookService = bookservice;
  }
  @Get()
  getAllBooks(): BookDto[] {
    return [];
  }
  @Get()
  getBook(): BookDto {
    return this.bookService.getBook();
  }

  @Post()
  createBook(@Body() bookDto: BookDto): BookDto {
    console.log(bookDto);
    return bookDto;
  }
  @Put()
  updateBook() {}
  @Delete()
  deleteBook() {}
}
