import { Schema, model } from 'mongoose';
import { IArticle } from './types/artilce';

const articleSchema = new Schema<IArticle>(
    {
        title: { type: String, required: true },
        subtitle: { type: String, default: '' },
        img: { type: String, default: '' },
        views: { type: Number, default: 0 },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        type: {
            type: String,
            required: [true, 'Type is required'],
            enum: ['IT', 'GAMES', 'CINEMA'],
        },
        blocks: {
            type: Array,
            required: [true, 'Article blocks is required'],
            validate: {
                validator: function (array) {
                    return array.length >= 1;
                },
                message: 'At least one block is required',
            },
            comments: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Comment',
                },
            ],
            likes: {
                type: Number,
                default: 0,
            },
        },
    },
    { versionKey: false, timestamps: true },
);

export const Article = model<IArticle>('Article', articleSchema);
