const router = require('express').Router();
const Place = require('../models/placeModel.js');

// debug route
router.get('/places', (req, res) => {
  Place.find()
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// get all places for a given world
router.get('/places/:worldId', (req, res) => {
  // TODO: verify user have access to that world
  Place.find({ world: req.params.worldId })
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// get specific info for place
router.get('/place/:id', (req, res) => {
  // TODO: how we gonna track worlds, yo?
  Place.findById(req.params.id)
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post('/place', (req, res) => {
  // TODO: how we gonna track worlds, yo?
  const body = Object.assign({}, req.body, { world: '5b53f1bf3a8ade2d6b5b3b52' }) || {};
  Place.create(body)
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});


router.put('/place/:id', (req, res) => {
  // TODO: validate user access, prevent editing world field
  const body = req.body || {};
  Place.findByIdAndUpdate({ _id: req.params.id }, body, { new: true })
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
