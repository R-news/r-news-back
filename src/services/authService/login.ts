import { User } from '@src/models';
import { ApiError } from '@src/utils/erros/cutomErrors';
import bcrypt from 'bcrypt';
import { getUserWithTokens } from '@src/utils/helpers';

export const login = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw ApiError.BadRequestError('Login details are incorrect.');
    }

    const isPassEquals = await bcrypt.compare(password, user.password);

    if (!isPassEquals) {
        throw ApiError.BadRequestError('Login details are incorrect.');
    }

    return await getUserWithTokens(user);
};
