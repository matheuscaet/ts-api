import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document{
    fullName: string;
    email: string;
    address: string;
    addressNumber: string;
    phoneNumber: string;
}

const UserSchema: Schema = new Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        addressNumber: { type: String, required: true },
        phoneNumber: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

UserSchema.post<IUser>('save', function () {
   console.log('Checkout the User we just saved: ', this)
});

export default mongoose.model<IUser>('users', UserSchema);