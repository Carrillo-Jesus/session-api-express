require('module-alias/register');
const app = require('@/routes/app');
const config = require('@/config');
//==============GENERA LA CLAVE SECRETA UNA SOLA VEZ COPIALA Y GUARDA EN EL .ENV en jwt_secret=================\\
// const crypto = require('crypto');
// const secret = crypto.randomBytes(64).toString('hex');
// console.log(secret);

//========================CONFIGURACION DE LA APP========================\\
app.listen(app.get('port'), () => {
    console.log(`Server on port ${config.app.app_url}`);
});
