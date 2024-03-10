const { Sequelize } = require('sequelize');
const config = require('@/config');

let dbInstance = null;

function getDbInstance() {
    if (!dbInstance) {
        dbInstance = new Sequelize(config.db.name, config.db.user, config.db.password, {
            host: config.db.host,
            dialect: config.db.type,
        });
    }
    return dbInstance;
}

module.exports = getDbInstance;