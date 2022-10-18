const mongoose = require('mongoose');
const Schema =mongoose.Schema;

// const bookSchema = new Schema({
//     action:{
//         type : String,
//         reqi
//     }
// })

var BookSchema = new Schema({
    title: {
        type:String,
        required:[true,"Book Title is Required."]
    },
    author: {
        type:String,
        required:[true,"Author Name is Required."]
    },
    price: {
        type:Number,
        required:[true,"Price is Required."]
    },
    published_year: Number,
    book_image:String,
    updated_date: { type: Date, default: Date.now },
  });

  const Book = mongoose.model('book',BookSchema);

  module.exports = Book;