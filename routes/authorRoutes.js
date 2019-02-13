var db = require("../models");

module.exports = function(app) {
  app.get("/api/examples", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Example.findAll({
      include: [db.Post]
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/examples/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Example.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

};
