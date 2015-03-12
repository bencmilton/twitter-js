var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js feed', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, name: name, showForm: true } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var id = req.params.id;
  var tweetID = tweetBank.find( {id: Number(id)} );

  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweetID } );
});

router.post('/submit', function(req, res) {

  console.log("Router.post req.body: ", req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  console.log(tweetBank.list());
  res.redirect('/');
});

module.exports = router;