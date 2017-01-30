var http = require('http');
var server = http.createServer();
var db = require('./models/db');

server.on('request', require('./app'));
server.listen(3001, function () {
  console.log('Server is listening on port 3001!');
});
db.sync()
.then(function () {
  console.log('Syncing the database');
})
.catch(function (err) {
  console.error('Error syncing', err, err.stack);
});
