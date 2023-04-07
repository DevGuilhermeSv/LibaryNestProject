import { Schema } from 'mongoose';

export const Author = new Schema({
  name: String,
  surname: String,
});
