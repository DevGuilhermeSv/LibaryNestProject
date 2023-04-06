import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { AuthorController } from './Controllers/author/author.controller';

@Module({
  imports: [],
  controllers: [BooksController, AuthorController],
  providers: [],
})
export class AppModule {}
