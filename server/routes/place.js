const router = require('express').Router();
const Place = require('../models/placeModel.js');

// debug route
router.get('/places', (req, res) => {
  Place.find((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

router.get('/places/:worldId', (req, res) => {
  Place.find({ world: req.params.worldId }, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

router.get('/place/:id', (req, res) => {
  Place.findById(req.params.id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

module.exports = router;
