const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const config = require('@/config');
const secret = config.app.jwt_secret;
const sendConfirmationEmail = async (user) => {
    try {
        // Crear un token de confirmación
        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

        // Crear un enlace de confirmación
        const data = {
            confirmationLink: `${config.app.app_url}/api/auth/confirm-account/${token}`,
            user: user
        }

        const templatePath = path.join(__dirname, '../templates/userConfirmation.ejs');
        const emailTemplate = fs.readFileSync(templatePath, 'utf-8');
        const correoHTML = ejs.render(emailTemplate, data);

        // Configurar el transporte de correo
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Configurar las opciones de correo
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: user.email,
            subject: 'Confirmación de cuenta',
            html: correoHTML
        };

        // Enviar el correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) {
        console.error('An error occurred while sending the mail' + error);
    };
}

module.exports = {
    sendConfirmationEmail
};