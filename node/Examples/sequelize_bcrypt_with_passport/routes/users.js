var express = require("express");
var router = express.Router();
var db = require("../models/index");
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
  res.render("users/home");
});

// TODO - refactor to use flash messages!
router.post('/signup', function(req,res){
  db.User.createNewUser(req.body.username, req.body.password,
  function(response){
    if(response.status === 200){
      passport.authenticate('local')(req,res,function(){
        res.redirect('users/home');
      });
    }
    else {
      res.render("users/signup", {message: response.message, username: req.body.username});
    }
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