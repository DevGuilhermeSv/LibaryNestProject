import { Schema } from 'mongoose';
import { Author } from './Author';

export const Book = new Schema({
  name: String,
  author: [Author],
  language: String,

  releaseYear: Number,
  publisher: String,

  pages: Number,
});
