import { Module } from '@nestjs/common';
import { BooksController } from './Adapter/Controllers/books/books.controller';
import { AuthorController } from './Adapter/Controllers/author/author.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/libary')
  ],
  controllers: [BooksController, AuthorController],
  providers: [],
})
export class AppModule {}
