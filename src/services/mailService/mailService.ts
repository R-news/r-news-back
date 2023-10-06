
import { getEnvironmentVariables } from '@src/environments/environment';
import nodemailer from 'nodemailer';

if (!getEnvironmentVariables().SMTP.HOST || !getEnvironmentVariables().SMTP.PORT || !getEnvironmentVariables().SMTP.USER || !getEnvironmentVariables().SMTP.PASSWORD || !getEnvironmentVariables().urls.api) {
    throw new Error('Environment variable is not set');
}

const transporter = nodemailer.createTransport({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    host: getEnvironmentVariables().SMTP.HOST,
    port:  getEnvironmentVariables().SMTP.PORT,
    secure: true,
    auth: {
        user: getEnvironmentVariables().SMTP.USER,
        pass: getEnvironmentVariables().SMTP.PASSWORD,
    },
});
export const mailService = {
    sendActivationEmail: async (to: string, link: string) => {
        try{
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
        }catch(e){
            console.log(e)
        }
      
    },
};
