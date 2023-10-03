import { UserDto } from '@src/dtos';
import { IUser } from '@src/models';
import { tokenService } from '@src/services/tokenService/tokenService';

export const getUserWithTokens = async (user: IUser) => {
    const userData:any = new UserDto(user).toObject();
    const tokens = await tokenService.generateToken(userData);

    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, ...userData };
};
