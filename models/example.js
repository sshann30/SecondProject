module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    // Giving the Example model a name of type STRING
    name: DataTypes.STRING
  });
  

  Example.associate = function(models) {
    // Associating Example with Posts
    // When an Example is deleted, also delete any associated Posts
    Example.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return Example;
};
