import mongoose from 'mongoose';

export default interface IAuthor extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly name: string;
  readonly surname: string;
}
