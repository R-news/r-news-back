"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailService = void 0;
const environment_1 = require("@src/environments/environment");
const nodemailer_1 = __importDefault(require("nodemailer"));
if (!(0, environment_1.getEnvironmentVariables)().SMTP.HOST || !(0, environment_1.getEnvironmentVariables)().SMTP.PORT || !(0, environment_1.getEnvironmentVariables)().SMTP.USER || !(0, environment_1.getEnvironmentVariables)().SMTP.PASSWORD || !(0, environment_1.getEnvironmentVariables)().urls.api) {
    throw new Error('Environment variable is not set');
}
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: (0, environment_1.getEnvironmentVariables)().SMTP.USER,
        pass: (0, environment_1.getEnvironmentVariables)().SMTP.PASSWORD,
    },
});
exports.mailService = {
    sendActivationEmail: async (to, link) => {
        await transporter.sendMail({
            from: (0, environment_1.getEnvironmentVariables)().SMTP.USER,
            to,
            subject: `Account activation on the ${(0, environment_1.getEnvironmentVariables)().urls.api}`,
            text: '',
            html: `
            <div>
            <h1>Activation link</h1>
            <a href="${link}">${link}</a>
            </div>
            `,
        });
    },
};
//# sourceMappingURL=mailService.js.map