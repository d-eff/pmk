const mongoose = require('mongoose');

const placeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'places',
  },
);

module.exports = mongoose.model('place', placeSchema);
