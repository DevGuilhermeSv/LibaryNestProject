import { Injectable } from '@nestjs/common';
import { AuthorDto } from 'src/Application/Dto/Author.dto';
import IAuthorService from 'src/Domain/Interfaces/services/IAuthor.services';

@Injectable()
export class AuthorService implements IAuthorService {
  getAll(): [] {
    throw new Error('Method not implemented.');
  }
  getAuthor(): AuthorDto {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
}
