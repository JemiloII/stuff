var express = require("express")
var router = express.Router();
var db = require("../models/index");

router.get('/signup', function(req,res){
  res.render("users/signup", {message: null, username: ""});
});

router.get('/login', function(req,res){
  res.render("users/login", {message: null, username: ""});
});

// on submit, create a new users using form values
router.post('/signup', function(req,res){

  db.User.createNewUser(req.body.username, req.body.password,
  // callback that passes in an object
  function(response){
    if(response.status === 200){
      res.render("users/index", {message: response.message});
    }
    else {
      res.render("users/signup", {message: response.message, username: req.body.username});
    }
  });
});

// authenticate users when logging in
router.post('/login', function(req,res){
  db.User.authenticate(req.body.username, req.body.password,
  function(response){
    if(response.status === 200){
      res.redirect("/users/home");
    }
    else {
      res.render("users/login", {message: response.message, username: req.body.username});
    }
  });
});

router.get('/home', function(req,res){
  res.render("users/home");
});


module.exports = router;