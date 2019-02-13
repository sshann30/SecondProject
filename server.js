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



//http request to fortnite tracker api
var uri = 'https://api.fortnitetracker.com/v1/profile/'
// https://api.fortnitetracker.com/v1/profile/{platform}/{epic-nickname}    need to pass through parameters
// pc, xbl, psn
// TRN-Api-Key: 80f005a2-53d2-48e2-99a1-cac872ef77bf

app.post('/api/stats', function(req,res){
  axios
  .get(uri + req.body.platformDropDownBtn + '/' + req.body.epicNickName, {
    headers: {
      'TRN-Api-Key': '80f005a2-53d2-48e2-99a1-cac872ef77bf'
    }
  })
  .then(function(response){
    console.log(response.data)
  })
})
app.get("/api/stats",function(req,res){
  console.log(req.body)
  res.send("hello");
})
var port = process.env.PORT || 3000;
app.listen(port);