const mongoose = require('mongoose');

const characterSchema = mongoose.Schema(
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
    collection: 'characters',
  },
);

module.exports = mongoose.model('character', characterSchema);
