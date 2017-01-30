var Sequelize = require('sequelize');
var db = require('./db');

var Inventory = db.define('inventory', {
  product_id: {
    type: Sequelize.INTEGER,
    notNull: false
  },
  waist: {
    type: Sequelize.INTEGER,
    notNull: false
  },
  length: {
    type: Sequelize.INTEGER,
    notNull: false
  },
  style: {
    type: Sequelize.STRING,
    notNull: false
  },
  count: {
    type: Sequelize.INTEGER,
    notNull: false
  }
}
);

module.exports = Inventory;
