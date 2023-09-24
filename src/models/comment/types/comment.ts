import { ObjectId } from 'mongoose';

export interface IComment {
    _id: string;
    text: string;
    articleId: ObjectId;
    userId: ObjectId;
}
