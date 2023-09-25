import { ObjectId } from 'mongoose';
import jwt from 'jsonwebtoken';
import { Token } from 'models/token/tokenModel';
import { IUser } from 'models';
import {
    ACCESS_EXPIRES_IN_MILLI_SECONDS,
    REFRESH_EXPIRES_IN_MILLI_SECONDS,
} from 'utils/const/tokensExpiresInMilliseconds';

const { JWT_ACCESS_SECRET, JWT_REFRESH_TOKEN } = process.env;

if (!JWT_ACCESS_SECRET || !JWT_REFRESH_TOKEN) {
    throw new Error('Environment variable is not set');
}

type UserData = Pick<IUser, 'email' | 'role'>;

export const tokenService = {
    generateToken: async (payload: UserData) => {
        try {
            const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, {
                expiresIn: ACCESS_EXPIRES_IN_MILLI_SECONDS,
            });
            const refreshToken = jwt.sign(payload, JWT_REFRESH_TOKEN, {
                expiresIn: REFRESH_EXPIRES_IN_MILLI_SECONDS,
            });

            return {
                accessToken,
                refreshToken,
            };
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },

    saveToken: async (userId: ObjectId, refreshToken: string) => {
        try {
            const tokenData = await Token.findOne({ user: userId });
            if (tokenData) {
                tokenData.refreshToken = refreshToken;
                return await tokenData.save();
            }

            const token = await Token.create({ user: userId, refreshToken });

            return token;
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },

    removeToken: async (refreshToken: string) => {
        const tokenData = await Token.deleteOne({ refreshToken });
        return tokenData;
    },

    findToken: async (refreshToken: string) => {
        const tokenData = await Token.findOne({ refreshToken });
        return tokenData;
    },

    validateAccessToken(token: string) {
        const userData = jwt.verify(token, JWT_ACCESS_SECRET);
        return userData;
    },
    validateRefreshToken(token: string) {
        const userData = jwt.verify(token, JWT_REFRESH_TOKEN);
        return userData;
    },
};
