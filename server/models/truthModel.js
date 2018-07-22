const mongoose = require('mongoose');

const truthSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'truths',
  },
);

module.exports = mongoose.model('truth', truthSchema);
