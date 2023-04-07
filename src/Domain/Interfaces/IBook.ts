import mongoose from 'mongoose';
import IAuthor from './IAuthor';

export interface IBook extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;

  readonly author: [IAuthor];

  readonly language: string;

  readonly releaseYear: number;
  readonly publisher: string;

  readonly pages: number;
}
