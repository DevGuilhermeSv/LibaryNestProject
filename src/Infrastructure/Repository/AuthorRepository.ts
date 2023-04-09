import { Injectable } from '@nestjs/common';
import Repository from './Repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthorDto } from 'src/Application/Dto/Author.dto';
import { Author } from '../Schema/Author.schema';

@Injectable()
export class AuthorRepository extends Repository<Author> {
  constructor(
    @InjectModel(Author.name) private readonly authorModel: Model<Author>,
  ) {
    super(authorModel);
  }
  getAuthor(id: any): Promise<AuthorDto> {
    return this.authorModel.findById(id).exec();
  }
}
