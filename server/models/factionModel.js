const mongoose = require('mongoose');

const factionSchema = mongoose.Schema(
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
    collection: 'factions',
  },
);

module.exports = mongoose.model('faction', factionSchema);
