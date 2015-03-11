var express = require('express');
var app = express();
var logger = require('morgan');

app.use( logger('dev') );

var server = app.listen(3000, function(){
	console.log("server listening");
});

app.get ("/" , function (req, res) {
	res.send( 'Welcome to the Home Page!' );
});

app.get ("/news" , function (req, res) {
	res.send( 'Welcome to the News Page!' );
});