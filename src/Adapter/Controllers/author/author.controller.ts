import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuthorDto } from 'src/Application/Dto/Author.dto';
@Controller('author')
export class AuthorController {
    @Get()
    getAll(){

    }
    @Post()
    create(){

    }
    @Put()
    update(){

    }
    @Delete()
    delete(){
        
    }
}
