import { Module } from '@nestjs/common';
import { BooksController } from './Adapter/Controllers/books/books.controller';
import { AuthorController } from './Adapter/Controllers/author/author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Application/services/books/books.service';
import { AuthorService } from './Application/services/author/author.service';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/libary')],
  controllers: [BooksController, AuthorController],
  providers: [BooksService, AuthorService],
})
export class AppModule {}
