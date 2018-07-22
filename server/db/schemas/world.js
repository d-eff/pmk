const mongoose = require('mongoose');

const worldSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'worlds',
  },
);

module.exports = mongoose.model('world', worldSchema);
