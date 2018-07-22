const mongoose = require('mongoose');

const placeSchema = mongoose.Schema(
  {
    world: {
      type: mongoose.Schema.Types.ObjectId,
    },
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
