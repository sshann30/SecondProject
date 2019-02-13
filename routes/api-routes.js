// this is the route we use to save and display data to DB

// Dependencies
// =============================================================
var Gamer = require("../models/fortnite.js");


// Routes
// =============================================================
module.exports = function(app) {
    // Search for Specific Gamer (or all gamers) then provides JSON
    app.get("/api/:gamers?", function(req, res) {
      if (req.params.characters) {
        // Display the JSON for ONLY that character.
        // (Note how we're using the ORM here to run our searches)
        Gamer.findOne({
          where: {
            gamerTag: req.params.gamers
          }
        }).then(function(result) {
          return res.json(result);
        });
      } else {
        Gamer.findAll().then(function(result) {
          return res.json(result);
        });
      }
    });
  
    // If a user sends data to add a new gamer..
    app.post("/api/new", function(req, res) {
      // Take the request...
      var gamer = req.body;
  
      // Create a gamerTag
  
      // Using a RegEx Pattern to remove spaces from gamer.name
      // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
      var gamerTag = gamer.name.replace(/\s+/g, "").toLowerCase();
  
      // Then add the gamer to the database using sequelize
      Gamer.create({
        gamerTag: gamerTag,
        wins: gamer.wins,
        winPercentage: gamer.winPercentage,
        kills: gamer.kills,
        kD: gamer.kD
      });
  
      res.status(204).end();
    });
  };