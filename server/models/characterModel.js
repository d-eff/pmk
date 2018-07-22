const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'characters',
  },
);

module.exports = mongoose.model('character', characterSchema);
