import mongoose, { Schema } from 'mongoose';
import IItem from '../interfaces/item';

const ItemSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

ItemSchema.post<IItem>('save', function () {
   // logging.info('Mongo', 'Checkout the Item we just saved: ', this);
   console.log('Checkout the Item we just saved: ', this)
});

export default mongoose.model<IItem>('Item', ItemSchema);