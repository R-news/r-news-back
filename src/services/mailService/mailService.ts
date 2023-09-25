import nodemailer from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL } = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !API_URL) {
    throw new Error('Environment variable is not set');
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
    },
});
export const mailService = {
    sendActivationEmail: async (to: string, link: string) => {
        await transporter.sendMail({
            from: SMTP_USER,
            to,
            subject: `Account activation on the ${API_URL}`,
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
