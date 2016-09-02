'use strict';
module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Author.hasMany(models.Book, {onDelete: 'cascade', hooks:true});
      }
    }
  });
  return Author;
};