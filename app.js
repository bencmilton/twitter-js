var express = require('express');
var app = express();
var logger = require('morgan');
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');

app.use( logger('dev') );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function(){
	console.log("server listening");
});


app.engine('html' , swig.renderFile);
app.set('view engine' , 'html');
app.set('views',  __dirname + '/views');

swig.setDefaults({ cache: false });




