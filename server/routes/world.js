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

router.post('/world', (req, res) => {
  const body = Object.assign({}, req.body) || {};
  World.create(body, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(results);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
