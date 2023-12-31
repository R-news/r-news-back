import { ArticleBlockType, ArticleType } from './artilceEnums';
import { ObjectId } from 'mongoose';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
    title?: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export interface ArticleVideoBlock extends ArticleBlockBase {
    type: ArticleBlockType.VIDEO;
    src: string;
    title?: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock
    | ArticleVideoBlock;

export interface IArticle {
    _id: ObjectId;
    title: string;
    subtitle?: string;
    img?: string;
    views: number;
    userId: ObjectId;
    type: ArticleType;
    blocks: ArticleBlock;
    comments: Array<string>;
    likes: Array<ObjectId | string>;
}
