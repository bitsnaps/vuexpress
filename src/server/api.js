var express = require('express');
// var bodyParser = require('body-parser');

var app = express();

// app.use(bodyParser.json());
app.use(express.json());

app.get('/', function (req, res){
  res.json({
    message:"Hello"
  });
})

module.exports = app;
