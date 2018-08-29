const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../.config/dev.config.js');

// TODO: use async version?
const generateToken = (user) => {
  const body = { username: user.username, worlds: user.worlds };
  return jwt.sign({ user: body },
    config.jwt.secret,
    { expiresIn: config.jwt.expiration, algorithm: config.jwt.algorithm });
};

module.exports.signup = async (req, res, next) => {
  req.login(req.user, { session: false }, async (error) => {
    if (error) return next(error);
    const token = generateToken(req.user);
    return res.json({ token });
  });
};

module.exports.login = async (req, res, next) => {
  passport.authenticate('login', async (err, user) => {
    try {
      if (err || !user) {
        return next(new Error(err));
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const token = generateToken(user);
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
    return next();
  })(req, res, next);
};
