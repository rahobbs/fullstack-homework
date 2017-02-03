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

  Inventory.findAll({where: {product_id: req.params.product_id}})
  .then(function(inventoryData){
    inventoryData.forEach(function(inventoryRecord) {
      if (!response.waistArr.includes(inventoryRecord.waist)){
        response.waistArr.push(inventoryRecord.waist);
      }
      if (!response.lengthArr.includes(inventoryRecord.length)){
        response.lengthArr.push(inventoryRecord.length);
      }
      if (!response.styleArr.includes(inventoryRecord.style.trim())){
        response.styleArr.push(inventoryRecord.style.trim());
      }
    })
  }).then(function(){
    res.send(JSON.stringify(response));
  }).catch(next)
});

router.get('/:product_id/:waist/:length/:style', function(req, res, next) {
  console.log('req.params.style is ', req.params.style.trim())
  Inventory.findOne({
    where: {
      product_id: req.params.product_id,
      waist: req.params.waist,
      length: req.params.length,
      style: "jetstrams"

    }
  }).then(function(response){
    if(!response){
      console.log("the number is 0")
      res.send(404);
    } else {
      console.log("THE NUMBER OF ITEMS IS ", response.dataValues.count);
      res.send(response.dataValues.count)
    }
    // res.send(response.count)
  })
})

module.exports = router;
