const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
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
    collection: 'characters',
  },
);

module.exports = mongoose.model('character', characterSchema);
