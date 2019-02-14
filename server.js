var express = require('express');
var app = express();
var path = require('path');
var axios = require('axios');
var bodyParser = require('body-parser');

// create application/json parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("app/public"));

//routes 

require("./app/routes/html-routes")(app);
require("./app/routes/api-routes")(app);

var db = require("./app/models");


var port = process.env.PORT || 3000;
db.sequelize.sync({ force: true }).then(function(){


app.listen(port);
console.log("Listening on port " + port)
})