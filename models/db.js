const url = process.env.DATABASE_URL || 'postgres://localhost:5432/bonobos';
var Sequelize = require('sequelize');

var db = new Sequelize(url, {
  logging: false,
  native: true
});

module.exports = db;
