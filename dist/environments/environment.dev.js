"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevEnvironment = void 0;
exports.DevEnvironment = {
    port: parseInt(process.env.PORT) || 3000,
    db_host: process.env.DB_HOST,
    jwt_access_secret_key: process.env.DEV_JWT_ACCESS_SECRET,
    jwt_refresh_secret_key: process.env.DEV_JWT_REFRESH_SECRET,
    SMTP: {
        HOST: process.env.DEV_SMTP_HOST,
        PORT: process.env.DEV_SMTP_PORT,
        USER: process.env.DEV_SMTP_USER,
        PASSWORD: process.env.DEV_SMTP_PASSWORD
    },
    urls: {
        api: process.env.DEV_API_URL,
        client: process.env.DEV_CLIENT_URL
    }
};
//# sourceMappingURL=environment.dev.js.map