import { Injectable } from '@nestjs/common';
import Repository from './Repository';
import IAuthor from 'src/Domain/Interfaces/IAuthor';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorDto } from 'src/Application/Dto/Author.dto';

@Injectable()
export class AuthorRepository extends Repository<IAuthor> {
  constructor(
    @InjectModel('author') private readonly authorModel: Model<IAuthor>,
  ) {
    super(authorModel);
  }
  getAuthor(id: any): Promise<AuthorDto> {
    return this.authorModel.findById(id).exec();
  }
}
