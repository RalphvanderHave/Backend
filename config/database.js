const Sequelize = require('sequelize');

module.exports = new Sequelize('backendsprint2', 'userbackendralph', 'test1234!', {
    host: 'backendralph.mysql.database.azure.com',
    dialect: 'mysql'
});
