var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var path = require('path');
module.exports = app;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
var env = nunjucks.configure('views', { noCache: true });

// Use logging middleware
app.use(morgan('dev'));
// Serve static files from /public
app.use(express.static(path.join(__dirname, './public')));
// User req.body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom routes here
//app.use('/products', require('./routes/products'));

app.get('/', function (req, res) {
   res.render('index');
});

// Handle any errors that haven't been caught already
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});
