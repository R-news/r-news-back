import { DevEnvironment } from './environment.dev';
import { ProdEnvironment } from './environment.prod';

export interface Environment {
    port: number,
    db_host: string,
    jwt_access_secret_key: string,
    jwt_refresh_secret_key: string,
    SMTP: {
        HOST: string,
        PORT: string,
        USER: string,
        PASSWORD: string
    },
    urls: {
        api:string,
        client:string
    }
};

export function getEnvironmentVariables() {
    if(process.env.NODE_ENV === 'production') {
        return ProdEnvironment;
    }
    return DevEnvironment;
}