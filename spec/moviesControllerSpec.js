describe("Movie Controller",function(){

  var movieController,movie,req,res;
  movie={find:jasmine.createSpy(),findById:jasmine.createSpy()};
  req={params:{id:1}};
  res={send:jasmine.createSpy(),status:jasmine.createSpy()};
  movieController = require('./../controllers/moviesController')(movie);

  describe("Get",function(){

    it('should call Movie.find function',function(){
      movieController.gEt(req,res);
      expect(movie.find).toHaveBeenCalled();
    });
  });

  describe("get by id",function(){
    it("Should Call Movie.findById",function(){
      movieController.getId(req,res);
      expect(movie.findById).toHaveBeenCalled();
    });
  });

});
