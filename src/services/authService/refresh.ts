import { User } from 'models';
import { tokenService } from 'services/tokenService/tokenService';
import { ApiError } from 'utils/erros/cutomErrors';

export const refresh = async (refreshToken: string) => {
    if (!refreshToken) {
        throw ApiError.AuthorizationError();
    }

    const userData: any = tokenService.validateRefreshToken(refreshToken);
    const token = await tokenService.findToken(refreshToken);

    if (!userData || !token) {
        throw ApiError.AuthorizationError();
    }

    const user = await User.findById(userData.id);

    if (!user) {
        throw ApiError.AuthorizationError();
    }

    const newUserData = {
        user: user._id,
        email: user.email,
        role: user.role,
        isActivated: user.isActivated,
    };
    const tokens = await tokenService.generateToken(newUserData);

    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, ...newUserData };
};
