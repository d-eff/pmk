const router = require('express').Router();
const faction = require('../models/factionModel.js');

// debug route
router.get('/factions', (req, res) => {
  faction.find()
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// get all factions for a given world
router.get('/factions/:worldId', (req, res) => {
  // TODO: verify user have access to that world
  faction.find({ world: req.params.worldId })
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// get specific info for faction
router.get('/faction/:id', (req, res) => {
  // TODO: how we gonna track worlds, yo?
  faction.findById(req.params.id)
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post('/faction', (req, res) => {
  // TODO: how we gonna track worlds, yo?
  const body = Object.assign({}, req.body, { world: '5b53f1bf3a8ade2d6b5b3b52' }) || {};
  faction.create(body)
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});


router.put('/faction/:id', (req, res) => {
  // TODO: validate user access, prevent editing world field
  const body = req.body || {};
  faction.findByIdAndUpdate({ _id: req.params.id }, body, { new: true })
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
