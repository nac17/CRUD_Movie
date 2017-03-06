var express	= require('express');
var moviesRouter = require('./routes/moviesRouter') //terserah kita namain apa
var mongoose = require('mongoose');
var bodyParser=require('body-parser');

var db = mongoose.connect("mongodb://localhost/MoviesDb");
var app	= express();
app.use(bodyParser.json());

app.listen(3000,function(){
  console.log("running on port 3000");
});

app.use('/movies', moviesRouter); //yang terserah tadi masukin sini
