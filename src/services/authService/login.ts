import { User } from 'models';
import { ApiError } from 'utils/erros/cutomErrors';
import bcrypt from 'bcrypt';
import { tokenService } from 'services/tokenService/tokenService';

export const login = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw ApiError.BadRequestError('Login details are incorrect.');
    }

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
        throw ApiError.BadRequestError('Login details are incorrect.');
    }

    const userData = {
        id: user._id,
        email: user.email,
        role: user.role,
        isActivated: user.isActivated,
    };
    const tokens = await tokenService.generateToken(userData);

    await tokenService.saveToken(user._id, tokens.refreshToken);

    return { ...tokens, ...userData };
};
