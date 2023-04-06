import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookDto } from 'src/Application/Dto/Book.dto';
@Controller('books')
export class BooksController {
    @Get()
    getAllBooks():BookDto[]{
        return new Array();
    }

    @Post()
    createBook(@Body() bookDto:BookDto): BookDto{
        console.log(bookDto);
        return bookDto;
    }
    @Put()
    updateBook(){

    }
    @Delete()
    deleteBook(){

    }
}
