import { Schema } from 'mongoose';
import { Author } from './Author.schema';

export const Book = new Schema({
  name: String,
  author: [Author],
  language: String,

  releaseYear: Number,
  publisher: String,

  pages: Number,
});
