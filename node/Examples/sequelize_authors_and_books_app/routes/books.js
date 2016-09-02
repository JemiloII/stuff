var express = require("express");
var router = express.Router({mergeParams:true});
var db = require("../models");

// Index
router.get('/', function(req, res){
  db.Author.findById(req.params.author_id).then(function(author){
    author.getBooks().then(function(books){
      res.render('books/index', {author: author,books: books});
    });
  });
});

// New
router.get('/new', function(req, res){
  var id = req.params.author_id;
  res.render('books/new', {id:id});
});

// Create
router.post('/', function(req, res) {
  var author_id = Number(req.params.author_id);
  var title = req.body.book.title;
  var genre = req.body.book.genre;
  db.Book.create({
    title: title,
    genre:genre,
    AuthorId: author_id
  }).then(function(book){
      res.redirect('/authors/' + author_id + '/books');
  });
});

// Show
router.get('/:id', function(req, res) {
  db.Book.findById(req.params.id).then(function(err,book){
    res.render('books/show', {book: book});
  });
});

// Edit
router.get('/:id/edit', function(req, res) {
  var id = req.params.id;
  db.Book.findById(id).then(function(book){
    res.render('books/edit', {book: book});
  });
});

// Update
router.put('/:id', function(req, res) {
  var id = req.params.id;
  db.Book.findById(id).then(function(book){
      book.updateAttributes(req.body.book)
      .then(function(err,success){
        res.redirect('/authors/' + book.AuthorId + '/books');
     });
    });
});

// Destroy
router.delete('/:id', function(req, res) {
  var id = req.params.id;
  db.Book.findById(id).then(function(book){
    book.destroy().then(function(success){
      res.redirect('/authors/' + book.AuthorId + '/books');
    });
  });
});

module.exports = router;