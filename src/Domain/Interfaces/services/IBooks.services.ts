import { BookDto } from 'src/Application/Dto/Book.dto';

export default interface IBooksService {
  getAll(): [];
  getBook(): BookDto;
  update(): any;
  delete(): void;
}
