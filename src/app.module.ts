import { Module } from '@nestjs/common';
import { BooksController } from './Adapter/Controllers/books/books.controller';
import { AuthorController } from './Adapter/Controllers/author/author.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Application/Dto/services/books/books.service';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/libary')],
  controllers: [BooksController, AuthorController],
  providers: [BooksService],
})
export class AppModule {}
