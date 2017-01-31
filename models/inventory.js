var Sequelize = require('sequelize');
var db = require('./db');

var Inventory = db.define('inventory', {
  product_id: {
    type: Sequelize.STRING,
    notNull: false
  },
  waist: {
    type: Sequelize.STRING,
    notNull: false
  },
  length: {
    type: Sequelize.STRING,
    notNull: false
  },
  style: {
    type: Sequelize.STRING,
    notNull: false
  },
  count: {
    type: Sequelize.STRING,
    notNull: false
  },
},{
    timestamps: false
}
);

module.exports = Inventory;
