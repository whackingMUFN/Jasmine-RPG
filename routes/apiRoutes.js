var db = require("../models");

module.exports = function(app) {
  // Get all characters
  app.get("/api/characters", function(req, res) {
    db.character.findAll({}).then(function(dbChars) {
      
      res.json(dbChars);
    });
  });

  // Create a new Character
  app.post("/api/characters", function(req, res) {
    db.character.create({
      name: req.body.name,
      age:req.body.age,
      race: req.body.race,
      class: req.body.class
    }).then(function(dbChar) {
      
      res.json(dbChar);
    });
  });

  // Delete a character by id
  app.delete("/api/characters/:id", function(req, res) {
    db.character.destroy({ where: { id: req.params.id } }).then(function(dbChar) {
      res.json(dbChar);
    });
  });

  // GET, POST, and DELETE for JOURNEYS
  // get all journeys
  app.get("/api/journeys", function(req, res) {
    db.journey.findAll({}).then(function(dbJourney) {
      
      res.json(dbJourney);
    });
  });

    // Create a new Journey
  app.post("/api/journeys", function(req, res) {
    db.journey.create({
      name: req.body.name,
      xp: req.body.xp,
    }).then(function(dbJourney) {
      
      res.json(dbJourney);
    });
  });

  // Delete Journey
  app.delete("/api/journeys/:id", function(req, res) {
    db.journey.destroy({ where: { id: req.params.id } }).then(function(dbJourney) {
      res.json(dbJourney);
    });
  });


    // GET, POST, and DELETE for ENEMIES
// get all journeys
app.get("/api/enemies", function(req, res) {
  db.enemy.findAll({}).then(function(dbEnemies) {
    
    res.json(dbEnemies);
  });
});

  // Create a new Journey
  app.post("/api/enemies", function(req, res) {
    
    db.enemy.create({
      name: req.body.name,
      race: req.body.race,
      strength: req.body.strength,
      health: req.body.health
    }).then(function(dbEnemies) {
      
      res.json(dbEnemies);
    });
  });

  // Delete Journey
  app.delete("/api/enemies/:id", function(req, res) {
    db.enemy.destroy({ where: { id: req.params.id } }).then(function(dbEnemies) {
      res.json(dbEnemies);
    });
  });



};
