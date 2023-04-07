import { AuthorDto } from 'src/Application/Dto/Author.dto';

export default interface IAuthorService {
  getAll(): [];
  getAuthor(): AuthorDto;
  update(): any;
  delete(): void;
}
