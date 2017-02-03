var Product = require('../models/product');
var router = require('express').Router();

// Get all products
router.get('/', function(req, res, next) {
  Product.findAll().then(function(products) {
    if (!products){
      console.log('routed to products but 404')
      res.sendStatus(404);
    } else {
      console.log('routed to products');
      res.send(products);
    }
  }).catch(next)
});

module.exports = router;
