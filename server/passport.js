const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('./models/userModel.js');

passport.use('login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
},
async (username, password, cb) => {
  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      return cb(null, false, { message: 'no entrar' });
    }

    const valid = await userModel.validatePassword(password);
    if (!valid) {
      return cb(null, false, { message: 'no entrar' });
    }

    return cb(null, user, { message: 'aww yeah' });
  } catch (err) {
    return cb(err);
  }
}));
