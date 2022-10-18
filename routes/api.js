const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const upload = require('./uploadImg')


//get all books
router.get('/books', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Book.find({}, 'title author price published_year book_image')
    .then((data) => res.json(data))
    .catch(next);
});

//to add book
router.route('/books').post(upload.single('book_image'), (req, res) => {
  // console.log(req.file.filename)
  if (req.body.title) {
    var bookObj = req.body;
    bookObj.book_image =req.file.filename
    console.log(bookObj)
    Book.create(bookObj)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
})

//to delete book
router.delete('/books/:id', (req, res, next) => {
  Book.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

//to get book
router.get('/books/:id', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Book.findById(req.params.id, 'title author price published_year book_image')
    .then((data) => res.json(data))
    .catch(next);
});

//to update book
router.put('/books', (req, res, next) => {


  if (req.body._id) {
    Book.findByIdAndUpdate(req.body._id, req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

module.exports = router;