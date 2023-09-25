import { registration } from './registration';
import { logout } from './logout';
import { login } from './login';
import { activate } from './activate';
import { refresh } from './refresh';

export const authService = {
    registration: registration,
    login: login,
    logout: logout,
    activate: activate,
    refresh: refresh,
};
