const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      lowercase: true,
      index: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'users',
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function save(next) {
  if (this.isModified('password') || this.isNew) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  }
});

userSchema.methods.validatePassword = async function validatePassword(pass) {
  const compare = await bcrypt.compare(pass, this.password);
  return compare;
};

module.exports = mongoose.model('user', userSchema);
