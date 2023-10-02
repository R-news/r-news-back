import { UserDto } from 'dtos';
import { IUser } from 'models';
import { tokenService } from 'services/tokenService/tokenService';

export const getUserWithTokens = async (user: IUser) => {
    const userData = new UserDto(user).toObject();
    const tokens = await tokenService.generateToken(userData);

    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, ...userData };
};
