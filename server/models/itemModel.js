const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    collection: 'items',
  },
);

module.exports = mongoose.model('item', itemSchema);
