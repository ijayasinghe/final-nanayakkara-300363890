const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  bookTitle:{type:String, required:true},
  bookAuthor:{type:String, required:true},
  description:{type:String}
});

// This Activitry creates the collection called activitimodels
const bookModel = mongoose.model("300363890-nanayakkara", bookSchema);
module.exports = bookModel;