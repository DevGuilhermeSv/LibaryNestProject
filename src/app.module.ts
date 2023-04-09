import { Module } from '@nestjs/common';
import { BooksController } from './Adapter/Controllers/books/books.controller';
import { AuthorController } from './Adapter/Controllers/author/author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Application/services/books/books.service';
import { AuthorService } from './Application/services/author/author.service';
import { BookRepository } from './Infrastructure/Repository/BookRepository';
import { AuthorRepository } from './Infrastructure/Repository/AuthorRepository';
import { Book, BookSchema } from './Infrastructure/Schema/Book.schema';
import { Author, AuthorSchema } from './Infrastructure/Schema/Author.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/libary'),
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema },
    ]),
  ],
  controllers: [BooksController, AuthorController],
  providers: [BooksService, AuthorService, BookRepository, AuthorRepository],
})
export class AppModule {}
