const router = require('express').Router();
const Place = require('../models/placeModel.js');

router.get('/api/places', (req, res) => {
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

module.exports = router;
