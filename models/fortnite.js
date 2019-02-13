//LETS TALK TO THE DATABASE!!!!!!!!!!!!

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var gamer = sequelize.define("gamer", {
  // the gamerTag gets saved as a string
  gamerTag: Sequelize.STRING,
  // the wins (a integer)
  wins: Sequelize.INTEGER,
  // the winPercentage role (a integer)
  winPercentage: Sequelize.INTEGER,
  // the kills as integer
  kills: Sequelize.INTEGER,
  
  // and the gamers K/D (an int)
  kD: Sequelize.INTEGER
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
gamer.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;