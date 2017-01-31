var Inventory = require('../models/inventory')
var router = require('express').Router()

//Get all inventory
router.get('/', function(req, res, next) {
  Inventory.findAll().then(function(inventory) {
    if (!inventory){
      res.sendStatus(404);
    } else {
      console.log('routed to inventory');
      res.send(inventory);
    }
  }).catch(next)
});

module.exports = router;
