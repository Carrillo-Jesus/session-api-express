const getDbInstance = require('@/database/db');
const { DataTypes, Model } = require('sequelize');

class Blog extends Model {
    // Método de instancia
    getShortContent() {
        return this.content.substring(0, 100) + '...';
    }

    // Método estático
    static findByTitle(title) {
        return this.findOne({ where: { title } });
    }
}

Blog.init({
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    }
}, { sequelize: getDbInstance(), modelName: 'Blog', tableName: 'blogs' });

module.exports = Blog;