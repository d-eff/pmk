const router = require('express').Router();
const World = require('../models/worldModel.js');

router.get('/worlds', (req, res) => {
  World.find()
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/world/:id', (req, res) => {
  World.findById(req.params.id)
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post('/world', (req, res) => {
  const body = req.body || {};
  World.create(body)
    .then((results) => {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});


router.put('/world/:id', (req, res) => {
  const body = req.body || {};
  World.findByIdAndUpdate({ _id: req.params.id }, body, { new: true })
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
