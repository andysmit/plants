var express = require("express");
var router = express.Router();
const Plants = require('../db/models').Plants;

// API for creating a plant
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

// API for listing all the plants
router.get("/", function(req, res, next) {
    return Plants
    .findAll()
    .then(plants => res.status(201).send(plants))
    .catch(error => res.status(400).send(error));
});

// API for editing plant entry
router.put("/", function(req, res, next) {
    return Plants
    .update(
        {
            name: req.body.name,
            description: req.body.description,
            season: req.body.season,
        },
        {
            where: { id: req.body.id }
            
        }
    )
    .then(plants => res.status(201).send(plants))
    .catch(error => res.status(400).send(error));
});

// API for deleting a plant entry
router.delete("/", function(req, res, next) {
    return Plants
    .destroy(
        {
            where: { id: req.body.id }
        }
    )
    .then(plants => res.status(201).send(plants))
    .catch(error => res.status(400).send(error));
});

module.exports = router;
