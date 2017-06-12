// server.js

var express = require('express');
var assert = require('assert');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});

app.listen(process.env.PORT || 5000);
