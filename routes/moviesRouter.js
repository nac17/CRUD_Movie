var express = require('express');
var app = express();

var Movie=require('./../model/movieModel');
var getMovies = require('./../controllers/moviesController')(Movie);

var moviesRouter = express.Router();

moviesRouter.route('') //movies
	.get(getMovies.gEt)
	.post(getMovies.aDd)
	.delete(getMovies.del);

moviesRouter.route('/:paramId') //movies by id
	.get(getMovies.getId)
	.put(getMovies.update)
	.patch(getMovies.patch);

module.exports = moviesRouter;
