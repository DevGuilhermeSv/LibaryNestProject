import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Author } from './Author.schema';

@Schema()
export class Book {
  @Prop()
  name: string;
  @Prop()
  authorId: [any];
  @Prop()
  language: string;
  @Prop()
  releaseYear: number;
  @Prop()
  publisher: string;
  @Prop()
  pages: number;
}
export const BookSchema = SchemaFactory.createForClass(Book);
