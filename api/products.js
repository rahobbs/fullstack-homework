var Product = require('../models/product')
var router = require('express').Router()

//Get all products
router.get('/products', function(req, res, next) {
  Product.findAll().then(function(products) {
    if (!products){
      res.sendStatus(404);
    } else {
      console.log('routed to products');
      res.send(products);
    }
  }).catch(next)
});

module.exports = router;