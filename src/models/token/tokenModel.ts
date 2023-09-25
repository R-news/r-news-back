import { Schema, model } from 'mongoose';
import { IToken } from './types/token';

const tokenSchema = new Schema<IToken>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, require: true },
});

export const Token = model<IToken>('Token', tokenSchema);
