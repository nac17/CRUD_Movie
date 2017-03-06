// var Movie = require('./../model/movieModel');

var movieController=function(Movie){
  var getMovies = function(req,res){
    Movie.find(function(err,movies){
      if(err){
        res.status(500);
        res.send("Internal server error");
      } else{
        res.status(200);
        res.send(movies);
      }
    });
  };

  var addMovies = function(req, res){
    var movie=new Movie(req.body);
    movie.save(function(err){
       if(err){
         res.status(500);
         res.send("Failed");
       }else{
         res.status(201);
         res.send(movie);
       }
     });
   };

  var getById = function(req, res){
    Movie.findById(req.params.paramId, function(err,movie){
      if(err){
        res.status(404);
        res.send("Not Found Cuk");
      }
      else{
        res.status(200);
        res.send(movie);
      }
    });
   };

  var update = function(req,res){
    Movie.findById(req.params.paramId,function(err,movie){
      if(err){
        res.status(404);
        res.send("Not Found");
      }else{
        movie.title = req.body.title;
        movie.genre = req.body.genre;
        movie.rating = req.body.rating;
        movie.isReleased = req.body.isReleased;

        movie.save(function(err){
          if(!err){
            res.status(200);
            res.send(movie);
          }else {
            res.status(500);
            res.send("Failed");
          }
        });
      }
    });
  };

  var patch = function(req,res){
    Movie.findById(req.params.paramId,function(err,movie){
      if(!err){
        if(req.body._id){
          delete req.body._id;
        }
        for(var p in req.body){
          movie[p]=req.body[p];
        }

        movie.save(function(err){
          if(!err){
            res.status(200);
            res.send(movie);
          }
        })
      }
    });
  };

  var del = function(req,res){
    Movie.findById(req.body._id,function(err,movie){
      movie.remove(function(err){
        if(!err){
          res.status(204);
          res.send("Removed");
        }
      })
    })
  }

  return{
      gEt:getMovies,
      aDd:addMovies,
      getId:getById,
      update:update,
      patch:patch,
      del:del
  }

};


module.exports = movieController;

// module.exports = {
//   gEt:getMovies,
//   aDd:addMovies,
//   getId:getById,
//   update:update,
//   patch:patch,
//   del:del
// };
