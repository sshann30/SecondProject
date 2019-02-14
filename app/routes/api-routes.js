// this is the route we use to save and display data to DB
var axios = require('axios')
// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {
  // Search for Specific Gamer (or all gamers) then provides JSON
  app.get("/api/:gamers", function (req, res) {

    if (req.params.gamers) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      db.gamer.findOne({
        where: {
          gamerTag: req.params.gamers
        }
      }).then(function (result) {
        return res.json(result);
      });
    } else {
      db.gamer.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new gamer..
  app.post("/api/new", function (req, res) {


    var gamer = req.body;

    // Create a gamerTag

    // Using a RegEx Pattern to remove spaces from gamer.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var gamerTag = gamer.epicNickName.replace(/\s+/g, "").toLowerCase();

    //http request to fortnite tracker api
    var uri = 'https://api.fortnitetracker.com/v1/profile/'
    // https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}    need to pass through parameters
    // pc, xbl, psn
    // TRN-Api-Key: 80f005a2-53d2-48e2-99a1-cac872ef77bf
    console.log('hitting', uri + gamer.platformDropDownBtn + "/" + gamer.epicNickName)

    axios
      .get(uri + gamer.platformDropDownBtn + '/' + gamer.epicNickName, {
        headers: {
          'TRN-Api-Key': '80f005a2-53d2-48e2-99a1-cac872ef77bf'
        }
      })
      .then(function (response) {
        // console.log(response);
        console.log(response.data)
        db.gamer.create({
          gamerTag: gamer.epicNickName,
          wins: response.data.lifeTimeStats[8].value,
          winPercentage: response.data.lifeTimeStats[9].value.replace(/%/g, ''),
          kills: response.data.lifeTimeStats[10].value,
          kD: response.data.lifeTimeStats[11].value
        }).then(function(created){
          res.status(204).end();
          // console.log(created)
        }).catch(function(err){
          if (err) throw err
        });
      })
      .catch(function(err){
        if (err) throw err;
      })

    // Take the request...


    // Then add the gamer to the database using sequelize
    

    
  });
};