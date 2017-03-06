var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieModel = new Schema({
  title:String,
  genre:String,
  rating:Number,
  isReleased:{type:Boolean, default:true}                     /*Boolean*/ // bisa namun bisa di spesifik lagi
});

module.exports = mongoose.model("pelmms",movieModel);
