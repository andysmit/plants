var express = require("express");
var router = express.Router();
const Plants = require('../db/models').Plants;

router.post("/", function(req, res, next) {
    return Plants
    .create({
      name: req.body.name,
      description: req.body.description,
      season: req.body.season,
    })
    .then(plants => res.status(201).send(plants))
    .catch(error => res.status(400).send(error));
});


router.get("/", function(req, res, next) {
    return Plants
    .findAll()
    .then(plants => res.status(201).send(plants))
    .catch(error => res.status(400).send(error));
});

module.exports = router;
