import { User } from '@src/models';
import type { UserDto } from '@src/models';
import { tokenService } from '@src/services/tokenService/tokenService';
import { ApiError } from '@src/utils/erros/cutomErrors';
import { getUserWithTokens } from '@src/utils/helpers';

export const refresh = async (refreshToken: string) => {
    if (!refreshToken) {
        throw ApiError.AuthorizationError();
    }
console.log(refreshToken)
    const userData = tokenService.validateRefreshToken(refreshToken) as UserDto;

    const token = await tokenService.findToken(refreshToken);

    if (!userData || !token) {
        throw ApiError.AuthorizationError();
    }
    const user = await User.findById(userData.id);

    if (!user) {
        throw ApiError.AuthorizationError();
    }

    return await getUserWithTokens(user);
};
