const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const Extract = require('passport-jwt').ExtractJwt;
const userModel = require('../models/userModel.js');
const config = require('../.config/dev.config.js');

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

    const valid = await user.validatePassword(password);
    if (!valid) {
      return cb(null, false, { message: 'no entrar' });
    }

    return cb(null, user, { message: 'aww yeah' });
  } catch (err) {
    return cb(err);
  }
}));

passport.use(new JWTStrategy({
  secretOrKey: config.jwtSecret,
  jwtFromRequest: Extract.fromUrlQueryParameter('secret_token'),
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (err) {
    done(err);
  }
  return false;
}));
