// What "page to pull up" routes

var path = require('path');
module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '../public/index.html'));
    });



    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/post.html"));
    });


};