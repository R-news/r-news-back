
import { getEnvironmentVariables } from '@src/environments/environment';
import nodemailer from 'nodemailer';

if (!getEnvironmentVariables().SMTP.HOST || !getEnvironmentVariables().SMTP.PORT || !getEnvironmentVariables().SMTP.USER || !getEnvironmentVariables().SMTP.PASSWORD || !getEnvironmentVariables().urls.api) {
    throw new Error('Environment variable is not set');
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: getEnvironmentVariables().SMTP.USER,
        pass: getEnvironmentVariables().SMTP.PASSWORD,
    },
});
export const mailService = {
    sendActivationEmail: async (to: string, link: string) => {
        if(process.env.testEnabled){
            return
        }
        await transporter.sendMail({
            from: getEnvironmentVariables().SMTP.USER,
            to,
            subject: `Account activation on the ${getEnvironmentVariables().urls.api}`,
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
