const { Sequelize } = require('sequelize');
const config = require('@/config');
//Aplicando el patron singleton

let dbInstance = null;

function getDbInstance() {
    console.log('========Getting db instance=======');
    if (!dbInstance) {
        console.log('========Creating new db instance=======');
        dbInstance = new Sequelize(config.db.name, config.db.user, config.db.password, {
            host: config.db.host,
            dialect: config.db.type,
        });
    }
    return dbInstance;
}

module.exports = getDbInstance;