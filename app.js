var express = require('express');
var app = express();
var logger = require('morgan');
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

app.use( logger('dev') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var server = app.listen(3000);
var io = socketio.listen(server);

app.use('/', routes(io) );
app.use(express.static(__dirname + '/public'));




app.engine('html' , swig.renderFile);
app.set('view engine' , 'html');
app.set('views',  __dirname + '/views');

swig.setDefaults({ cache: false });




