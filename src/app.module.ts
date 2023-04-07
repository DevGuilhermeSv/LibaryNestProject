import { Module } from '@nestjs/common';
import { BooksController } from './Adapter/Controllers/books/books.controller';
import { AuthorController } from './Adapter/Controllers/author/author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Application/services/books/books.service';
import { AuthorService } from './Application/services/author/author.service';
import { BookRepository } from './Infrastructure/Repository/BookRepository';
import { AuthorRepository } from './Infrastructure/Repository/AuthorRepository';
import { Book } from './Domain/Entities/Book';
import { Author } from './Domain/Entities/Author';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/libary'),
    MongooseModule.forFeature([
      { name: 'book', schema: Book },
      { name: 'author', schema: Author },
    ]),
  ],
  controllers: [BooksController, AuthorController],
  providers: [BooksService, AuthorService, BookRepository, AuthorRepository],
})
export class AppModule {}
