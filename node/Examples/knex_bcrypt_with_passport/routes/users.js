var express = require("express");
var router = express.Router();
var knex = require("../db/knex");
var bcrypt = require("bcrypt");
var passport = require("passport");
var authMiddleware =require("../middleware/auth.js");

router.use(authMiddleware.currentUser);

router.get('/', authMiddleware.preventLoginSignup, function(req,res){
    res.render('users/index');
});

router.get('/signup', authMiddleware.preventLoginSignup, function(req,res){
    res.render('users/signup', { username: ""});
});

router.get('/login', authMiddleware.preventLoginSignup, function(req,res){
    res.render('users/login', {message: req.flash('loginMessage'), username: ""});
});

router.get('/home', authMiddleware.checkAuthentication, function(req,res){
  res.render("users/home", {message: req.flash('loginMessage')});
});

// TODO - refactor to use flash messages!
router.post('/signup', function(req,res){
  var message;
  var passwordHash = bcrypt.hashSync(req.body.password, 8);
  knex('users').insert({username:req.body.username, password:passwordHash}).then(function(){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/users/home');
    });
  }).catch(function(err){
      if(!req.body.username || !req.body.password){
        message = "Please enter a username and password";
      }
      else if (err.constraint === 'users_username_unique'){
        message = "Username must be unique";
      }
      message = message || "Please enter a password";
      res.render("users/signup", {message: message, username: req.body.username});

  });
});

// authenticate users when logging in - no need for req,res passport does this for us
router.post('/login', passport.authenticate('local', {
  successRedirect: '/users/home',
  failureRedirect: '/users/login',
  failureFlash: true
}));

router.get('/logout', function(req,res){
  //req.logout added by passport - delete the user id/session
  req.logout();
  res.redirect('/users/login');
});

module.exports = router;