import { ObjectId } from 'mongoose';

export type userTypes = 'user' | 'admin' | 'moderator';
export interface Settings {
    theme?: string;
}

export interface IUser {
    _id: string;
    isPremium: boolean;
    isActivated: boolean;
    activationLink?: string;
    username: string;
    email: string;
    password: string;
    role: userTypes;
    avatar?: string;
    token: string | null;
    myArticles: Array<ObjectId>;
    bookmarks: Array<ObjectId>;
    settings: Settings;
}

// TODO notifications
