import mongoose from 'mongoose';
import IAuthor from './IAuthor';

export abstract class IBook extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;

   authorId: any;

   language: string;

   releaseYear: number;
   publisher: string;

   pages: number;
}
