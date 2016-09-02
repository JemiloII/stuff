"use strict";

var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
   var User = sequelize.define('User', {
     username: {
        type: DataTypes.STRING,
        validate: {
            len: [6, 30]
          }
    },
    password: DataTypes.STRING
    },
  {
    classMethods: {
      encryptPass: function(password) {
        var hash = bcrypt.hashSync(password, salt);
        return hash;
    },
      comparePass: function(userpass, dbpass) {
      // don't salt twice when you compare....watch out for this
        return bcrypt.compareSync(userpass, dbpass);
    },
      createNewUser:function(username, password, callback) {
        if(password.length < 6) {
          callback({message: "Password should be more than six characters",status:400});
        }
        else{
        User.create({
            username: username,
            password: this.encryptPass(password)
          }).then(function(user) {
              callback({message: 'Account created, please log in now', status:200});
          }).catch(function(err){
            if(err.name === 'SequelizeValidationError'){
              callback({message: 'Your username should be at least 6 characters long', username: username, status:400});
            }
            else{
              callback({message: 'An account with that username already exists', username: username, status:400});
            }
         });
        }
      },
      authenticate: function(username, password, callback) {
     // find a user in the DB
      User.find({
          where: {
            username: username
          }
        })
        // when that's done,
        .then(function(user){
          if (user === null){
            callback({message: "Username does not exist", status: 400});
          }
          else if (!User.comparePass(password, user.password)){
            callback({message: "Invalid password", status: 400});
          }
          else {
            callback({status:200});
          }
        }).catch(function(err){
            console.log("ERR?",err);
            callback({message: "Oops! Something went wrong", status: 400});
        });
      }

      }
    });
  return User;
};







