var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('interviews/index');
});

router.get('/new', function(req, res, next) {
  res.render('interviews/new');
});

router.post('/', function(req, res, next) {
  res.redirect(`/interviews/${1}`)
});

router.get('/:id', function(req, res, next) {
  res.render('interviews/show')
});

router.get('/:id/edit', function(req, res, next) {
  res.render('interviews/edit')
});

router.post('/:id', function(req, res, next) {
  res.redirect(`/interviews/${1}`)
});

router.delete('/:id/delete', function(req, res, next) {
  res.redirect(`/interviews/${1}`)
});

module.exports = router;
