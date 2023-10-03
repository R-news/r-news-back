import { ObjectId } from 'mongoose';
import jwt from 'jsonwebtoken';
import { Token } from '@src/models';
import { IUser } from '@src/models';
import {
    ACCESS_EXPIRES_IN_MILLI_SECONDS,
    REFRESH_EXPIRES_IN_MILLI_SECONDS,
} from '@src/utils/const/tokensExpiresInMilliseconds';
import { ApiError } from '@src/utils/erros/cutomErrors';
import { getEnvironmentVariables } from '@src/environments/environment';


if (!getEnvironmentVariables().jwt_access_secret_key || !getEnvironmentVariables().jwt_refresh_secret_key) {
    throw new Error('Environment variable is not set');
}

type UserData = Pick<IUser, 'email' | 'role'>;

export const tokenService = {
    generateToken: async (payload: UserData) => {
        try {
            const accessToken = jwt.sign(payload, getEnvironmentVariables().jwt_access_secret_key, {
                expiresIn: ACCESS_EXPIRES_IN_MILLI_SECONDS,
            });
            const refreshToken = jwt.sign(payload, getEnvironmentVariables().jwt_refresh_secret_key, {
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
        const tokenData = await Token.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await tokenData.save();
        }

        const token = await Token.create({ user: userId, refreshToken });

        return token;
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
        try {
            const userData = jwt.verify(token, getEnvironmentVariables().jwt_access_secret_key);
            return userData;
        } catch {
            throw ApiError.AuthorizationError();
        }
    },
    validateRefreshToken(token: string) {
        try {
            const userData = jwt.verify(token, getEnvironmentVariables().jwt_refresh_secret_key);
            return userData;
        } catch {
            throw ApiError.AuthorizationError();
        }
    },
};
