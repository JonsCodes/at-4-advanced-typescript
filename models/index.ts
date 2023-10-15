import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Place, { IPlace } from './places';
import Comment, { IComment } from './comment';

dotenv.config();

mongoose.connect(process.env.MONGO_URI!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export { Place, IPlace, Comment, IComment };
