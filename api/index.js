var api = require('express').Router();
api.use('/products', require('./products'));
api.use('/inventory', require('./inventory'));

// Entry point for api endpoints, calls to ~/api go here

api.get('/', function(req, res, next) {
  res.sendStatus(200);
});

// No routes matched? 404.
api.use(function(req, res) {
  res.status(404).end();
});

module.exports = api;
