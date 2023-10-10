import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from './types/user';

const userSchema = new Schema<IUser>(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        isPremium: { type: Boolean, default: false },
        isActivated: { type: Boolean, default: false },
        activationLink: { type: String },
        email: { type: String, required: true, unique: true },
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
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Article',
            },
        ],
        subscribtions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }, 
        ],
        subscribers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }, 
        ],
        rating: {
            type: Number,
        },
        settings: {
            type: Object,
            default: {},
        },
        about: {
            type: String,
        }  
    },
    { timestamps: true },
);

userSchema.pre('save', async function () {
    if (this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

export const User = model<IUser>('User', userSchema);
