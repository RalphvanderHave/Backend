const Sequelize = require('sequelize');
const db = require('../config/database.js');

const Kite = db.define('kites', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    alt: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Kite;
