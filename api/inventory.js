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

router.get('/:product_id', function(req, res, next){
  var response = {
    waistArr: [],
    lengthArr: [],
    styleArr: []
  }

  Inventory.findAll({where: {product_id : req.params.product_id}})
  .then(function(inventoryData){
    //DO STUFF
    inventoryData.forEach(function(inventoryRecord) {
      if(!waistArr.contains(inventoryRecord.waist)){
        waistArr.push(inventoryRecord.waist);
      }
      if(!lengthArr.contains(inventoryRecord.length)){
        waistArr.push(inventoryRecord.length);
      }
      if(!styleArr.contains(inventoryRecord.style)){
        styleArr.push(inventoryRecord.style);
      }
    })
    res.send(response);
  }).catch(next)
});

module.exports = router;
