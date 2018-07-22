const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
require('./db.js');

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

fs.readdirSync(path.join(__dirname, 'routes')).map((file) => {
  app.use('/api', require(`./routes/${file}`));
});

app.listen(3000, () => {
  console.log('we running');
});
