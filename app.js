/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

require('./view')(app);

var data = require('./data');
app.get('/', function(req, res) {
  res.render('index', data);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
