import { Environment } from './environment';


export const ProdEnvironment: Environment = {
    port: parseInt(process.env.PORT!) || 3000,
    db_host: process.env.DB_HOST!,
    jwt_access_secret_key: process.env.PROD_JWT_ACCESS_SECRET!,
    jwt_refresh_secret_key: process.env.PROD_JWT_REFRESH_SECRET!,
    SMTP: {
        HOST: process.env.PROD_SMTP_HOST!,
        PORT: process.env.PROD_SMTP_PORT!,
        USER: process.env.PROD_SMTP_USER!,
        PASSWORD: process.env.PROD_SMTP_PASSWORD!
    },
    urls: {
        api:process.env.PROD_API_URL!,
        client:process.env.PROD_CLIENT_URL!
    }
};