var express = require("express");
var router = express.Router();
var db = require("../models");

// Index
router.get('/', function(req, res){
  db.Author.findAll().then(function(author){
    res.render('authors/index', {authors: author});
  });
});

// New
router.get('/new', function(req, res){
  res.render("authors/new");
});

// Create
router.post('/', function(req, res) {
  db.Author.create(req.body.author).then(function(){
    res.redirect('/authors');
  });
});

// Show
router.get('/:id', function(req, res) {
  db.Author.findById(req.params.id).then(function(author){
      res.render('authors/show', {author:author});
  });
});

// Edit
router.get('/:id/edit', function(req, res) {
  var id = req.params.id;
  db.Author.findById(id).then(function(author){
    res.render('authors/edit', {author: author});
  });
});

// Update
router.put('/:id', function(req, res) {
  var id = req.params.id;
  db.Author.findById(id).then(function(author){
    author.updateAttributes(req.body.author)
    .then(function(){
      res.redirect('/authors');
    });
  });
});

// Destroy
router.delete('/:id', function(req, res) {
  var id = req.params.id;
  db.Author.findById(id).then(function(author){
    author.destroy().then(function(){
      res.redirect('/authors');
    });
  });
});

module.exports = router;