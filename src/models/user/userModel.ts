import { Schema, model } from 'mongoose';
import { IUser } from './types/user';

const userSchema = new Schema<IUser>(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        isPremium: { type: Boolean, default: false },
        isActivated: { type: Boolean, default: false },
        activationLink: { type: String },
        email: { type: String, required: true, unique: true },
        token: {
            type: String,
            default: null,
        },
        role: {
            type: String,
            required: [true, 'Role is required'],
            enum: ['admin', 'moderator', 'user'],
        },
        avatar: {
            type: String,
            default:
                'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        },
        myArticles: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Article',
            },
        ],
        bookmarks: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Article',
            },
        ],
        settings: {
            type: Object,
            default: {},
        },
    },
    { versionKey: false, timestamps: true },
);

export const User = model<IUser>('User', userSchema);
