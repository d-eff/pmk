const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');

// initialize mongo connection
require('./utils/db');

// initialize passport and jwt
require('./utils/auth');

// tap the rockies
app.use(cors());
// hook in body-parser
app.use(bodyParser.json());

// TODO: Automate doc generation
app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

// Load routes
fs.readdirSync(path.join(__dirname, 'routes')).map((file) => {
  app.use('/api', require(`./routes/${file}`));
});

// Strike it up
app.listen(3000, () => {
  console.log('we running');
});
