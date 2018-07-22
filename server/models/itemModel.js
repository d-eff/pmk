const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
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
    collection: 'items',
  },
);

module.exports = mongoose.model('item', itemSchema);
