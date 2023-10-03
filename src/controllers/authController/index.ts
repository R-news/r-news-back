import { registrationController } from './registrationController';
import { activateController } from './activateController';
import { logoutController } from './logoutController';
import { refreshController } from './refreshController';
import { loginController } from './loginController';
import { asyncWrapper } from '@src/utils/erros/asyncWrapper';

const authController = {
    registration: asyncWrapper(registrationController),
    login: asyncWrapper(loginController),
    activate: asyncWrapper(activateController),
    logout: asyncWrapper(logoutController),
    refresh: asyncWrapper(refreshController),
};

export { authController}
