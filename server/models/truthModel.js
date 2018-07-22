const mongoose = require('mongoose');

const truthSchema = mongoose.Schema(
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
    collection: 'truths',
  },
);

module.exports = mongoose.model('truth', truthSchema);
