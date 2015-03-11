var express = require('express');
var app = express();
var logger = require('morgan');

app.use( logger('dev') );

var server = app.listen(3000, function(){
	console.log("server listening");
});

app.get ("/" , function (req, res) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get ("/news" , function (req, res) {
	res.send( 'Welcome to the News Page!' );
});

app.engine(‘html’ , swig.renderFile);
app.set(‘view engine’ , ‘html’);
app.set(‘views’,  __dirname + ‘/views’);

swig.setDefaults({ cache: false });