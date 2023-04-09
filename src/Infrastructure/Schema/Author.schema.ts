import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Author {
  @Prop()
  name: string;
  @Prop()
  surname: string;
}
export const AuthorSchema = SchemaFactory.createForClass(Author);
