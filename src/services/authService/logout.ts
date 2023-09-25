import { tokenService } from 'services/tokenService/tokenService';

export const logout = async (refreshToken: string) => {
    const token = await tokenService.removeToken(refreshToken);
    return token;
};
