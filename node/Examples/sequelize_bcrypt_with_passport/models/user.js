var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

module.exports = function (sequelize, DataTypes){
   var User = sequelize.define('User', {
     username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
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
        return bcrypt.compareSync(userpass, dbpass);
    },
      // this is currently not using flash messages - TODO: refactor to connect flash!
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
      }
      }
    });
  return User;
};





