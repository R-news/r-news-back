import { User } from 'models';
import { v4 as uuidv4 } from 'uuid';
import { mailService } from 'services/mailService/mailService';
import { tokenService } from 'services/tokenService/tokenService';
import { ApiError } from 'utils/erros/cutomErrors';

const { API_URL } = process.env;

interface RegistrationResponse {
    accessToken: string;
    refreshToken: string;
    email: string;
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
        activationLink: id,
        role: 'user',
    });

    await mailService.sendActivationEmail(email, activationLink);

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
