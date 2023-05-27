const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const orderModel = db.define("OrderModel", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    dish: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    table: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = orderModel;