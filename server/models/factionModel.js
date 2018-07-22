const mongoose = require('mongoose');

const factionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'factions',
  },
);

module.exports = mongoose.model('faction', factionSchema);
