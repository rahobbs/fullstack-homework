var api = require('express').Router();

api.get('/', function(req, res, next) {
  console.log('we did it!');
  res.sendStatus(200);
});

api.use('/products', require('./products'));
api.use('/inventory', require('./inventory'));

// No routes matched? 404.
api.use(function(req, res) {
  console.log('subroutes failed!')
  res.status(404).end();
});

module.exports = api;
