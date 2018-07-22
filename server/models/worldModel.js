const mongoose = require('mongoose');

const worldSchema = mongoose.Schema(
  {
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
    collection: 'worlds',
  },
);

module.exports = mongoose.model('world', worldSchema);
