import mongoose, { Schema } from 'mongoose';
import { IItem } from '../interfaces/item';

const ItemSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

ItemSchema.post<IItem>('save', function () {
   console.log('Checkout the Item we just saved: ', this)
});

export default mongoose.model<IItem>('items', ItemSchema);