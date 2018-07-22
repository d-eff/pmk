const mongoose = require('mongoose');
const config = require('../.config/dev.config.js');

mongoose.promise = global.Promise;

const connection = mongoose.connect(config.mongoUrl);

connection
  .then((db) => {
    console.log('db connection up');
    return db;
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
