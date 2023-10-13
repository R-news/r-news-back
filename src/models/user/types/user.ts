import { ObjectId } from 'mongoose';
import { Request } from 'express';

export type userTypes = 'user' | 'admin' | 'moderator';
export interface Settings {
    theme?: string;
}

export interface IUser {
    _id: ObjectId;
    isPremium: boolean;
    isActivated: boolean;
    activationLink?: string;
    username: string;
    about?: string;
    email?: string;
    password: string;
    role: userTypes;
    avatar?: string;
    rating: number;
    token: string | null;
    myArticles: Array<ObjectId>;
    bookmarks: Array<ObjectId | string>;
    likes: Array<ObjectId>;
    subscribers: Array<ObjectId>;
    subscriptions: Array<ObjectId>;
    settings: Settings;
}

export interface UserDto {
    id: string;
    role: userTypes;
    isActivated: boolean;
    username: string;
    iat: number;
    exp: number;
}

export interface RequestWithAuthUser extends Request {
    user: UserDto;
}

// TODO notifications
