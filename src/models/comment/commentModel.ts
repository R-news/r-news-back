import { Schema, model } from 'mongoose';
import { IComment } from './types/comment';

const commentSchema = new Schema<IComment>(
    {
        text: { type: String, required: true },
        articleId: {
            type: Schema.Types.ObjectId,
            ref: 'Article',
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        likes: {
            type: Number,
            default: 0,
        },
    },
    { versionKey: false, timestamps: true },
);

export const Comment = model<IComment>('Comment', commentSchema);
