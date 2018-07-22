const mongoose = require('mongoose');

const worldSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('world', worldSchema);
