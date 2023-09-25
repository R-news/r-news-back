import { User } from 'models';
import { ApiError } from 'utils/erros/cutomErrors';

export const activate = async (activationLink: string) => {
    const user = await User.findOne({ activationLink });
    if (!user) {
        throw ApiError.NotFoundError('User is not found.');
    }
    user.isActivated = true;
    await user.save();
};
