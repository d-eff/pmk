const express = require('express');
const app = express();
require('./db/db.js');
const world = require('./db/schemas/world.js');

app.get('/', (req, res) => {
  world.find((err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('we running');
});
