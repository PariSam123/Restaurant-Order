const Sequelize = require('sequelize');

const sequelize = new Sequelize('restaurant-order', 'root', 'Parija@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;