import { activateController } from './activateController';
import { logoutController } from './logoutController/logoutController';
import { refreshController } from './refreshController';
import { loginController } from './loginController/loginController';
import { asyncWrapper } from '@src/utils/erros/asyncWrapper';
import { registrationController } from './registrationController/registrationController';

const authController = {
    registration: asyncWrapper(registrationController),
    login: asyncWrapper(loginController),
    activate: asyncWrapper(activateController),
    logout: asyncWrapper(logoutController),
    refresh: asyncWrapper(refreshController),
};

export { authController}
