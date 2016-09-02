var passportLocal = require("passport-local");
var db = require("../models");

module.exports = function(passport){
  passport.use(new passportLocal.Strategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback : true
    },

    function(req, username, password, done) {
      // find a user in the DB
      db.User.find({
          where: {
            username: username
          }
        })
        // when that's done,
        .then(function(user){
          if (user === null){
            return done (null, false, req.flash('loginMessage', 'Username does not exist.'));
          }
          if ((db.User.comparePass(password, user.password)) !== true){
            return done (null, false, req.flash('loginMessage', 'Invalid Password'));
          }
          return done(null, user);
        }).catch(function(err){
          if(err){
            return done (err, req.flash('loginMessage', 'Oops! Something went wrong.'));
          }
        });
    }));

    // prepare our serialize functions
    passport.serializeUser(function(user, done){
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
      db.User.find({
          where: {
            id: id
          }
        })
        .then(function(user){
          done(null, user);
        }).catch(function(err){
          done(err,null);
        });
    });
};