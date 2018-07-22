const express = require('express');
const app = express();
require('./db/db.js');

app.get('/', (req, res) => res.send('sup'));

app.listen(3000, () => {
  console.log('we running');
});
