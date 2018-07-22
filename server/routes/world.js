const router = require('express').Router();
const World = require('../models/worldModel.js');

router.get('/worlds', (req, res) => {
  World.find((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

router.get('/world/:id', (req, res) => {
  World.findById(req.params.id, (err, results) => {
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
