import mongoose from 'mongoose';

export interface IBook extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;

  readonly author: Object[];

  readonly language: string;

  readonly releaseYear: number;
  readonly publisher: string;

  readonly pages: number;
}
