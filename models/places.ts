import mongoose, { Document, Schema } from 'mongoose';
import Comment from './comment';

export interface IPlace extends Document {
  name: string;
  pic: string;
  cuisines: string[];
  city: string;
  state: string;
  founded: number;
  comments: typeof Comment[];
  showEstablished(): string;
}

const placeSchema = new Schema<IPlace>({
  name: { type: String, required: true, trim: true },
  pic: { type: String, default: '/images/outside.jpg' },
  cuisines: [{ type: String, required: true }],
  city: { type: String, default: 'Anytown', trim: true },
  state: { type: String, default: 'USA', trim: true },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true });

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
}

export default mongoose.model<IPlace>('Place', placeSchema);
