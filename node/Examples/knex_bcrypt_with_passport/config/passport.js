var passportLocal = require("passport-local");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

module.exports = function(passport){
  passport.use(new passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback : true
  },

  function(req, username, password, done) {
      // find a user in the DB
      knex('users').where({
        username: username
      }).first()
        // when that's done,
        .then(function(user){
          if (!(bcrypt.compareSync(password, user.password))){
            return done (null, false, req.flash('loginMessage', 'Invalid Password'));
          }
          return done(null, user);
        }).catch(function(err){
          if(err){
            return done (null, false, req.flash('loginMessage', 'Username does not exist.'));
          }
        });
      }));

    // prepare our serialize functions
    passport.serializeUser(function(user, done){
      done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
      knex('users').where({id: id}).first().then(function(user){
        done(null, user);
      }).catch(function(err){
        done(err,null);
      });
    });
  };

