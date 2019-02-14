//LETS TALK TO THE DATABASE!!!!!!!!!!!!

// Dependencies
// =============================================================

module.exports= function(sequelize, DataTypes){

// Creates a "Gamer" model that matches up with DB
var Gamer = sequelize.define("gamer", {
  // the gamerTag gets saved as a string
  gamerTag: DataTypes.STRING,
  // the wins (a integer)
  wins: DataTypes.INTEGER,
  // the winPercentage role (a integer)
  winPercentage: DataTypes.INTEGER,
  // the kills as integer
  kills: DataTypes.INTEGER,
  
  // and the gamers K/D (an int)
  kD: DataTypes.INTEGER
}, 
  
  
);
return Gamer;
}



