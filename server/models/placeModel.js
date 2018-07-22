const mongoose = require('mongoose');

const placeSchema = mongoose.Schema(
  {
    world: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
  },
  {
    collection: 'places',
  },
);

module.exports = mongoose.model('place', placeSchema);
