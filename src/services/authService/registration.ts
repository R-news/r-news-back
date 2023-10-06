import { User } from '@src/models';
import { v4 as uuidv4 } from 'uuid';
// import { mailService } from '@src/services/mailService/mailService';
import { ApiError } from '@src/utils/erros/cutomErrors';
import { getUserWithTokens } from '@src/utils/helpers';

const { API_URL } = process.env;

interface RegistrationResponse {
    accessToken: string;
    refreshToken: string;
    role: string;
}

export const registration = async (
    email: string,
    password: string,
    username: string,
): Promise<RegistrationResponse> => {
    const candidate = await User.findOne({ email });
    if (candidate) {
        throw ApiError.ConflictError('User already exists.');
    }

    const id = uuidv4();
    const activationLink = `${API_URL}/api/auth/activate/${id}`;
    const user = await User.create({
        email,
        password,
        username,
        activationLink: activationLink,
        role: 'user',
    });

    // await mailService.sendActivationEmail(email, activationLink);

    return await getUserWithTokens(user);
};
