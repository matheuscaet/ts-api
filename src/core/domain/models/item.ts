import mongoose, { Schema, Document } from 'mongoose';

interface IItem extends Document {
    name: string;
    desc: string;
}

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