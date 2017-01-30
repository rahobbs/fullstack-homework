var Sequelize = require('sequelize');
var db = require('./db');

var Product = db.define('products', {
  product_id: {
    type: Sequelize.INTEGER,
    notNull: false
  },
  product_name: {
    type: Sequelize.STRING,
    notNull: false
  },
  product_image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  product_desciption: Sequelize.TEXT
}
);

module.exports = Product;
