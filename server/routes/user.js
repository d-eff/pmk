const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../.config/dev.config.js');

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user) => {
    try {
      if (err || !user) {
        return next(new Error(err));
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const body = { _id: user.id, username: user.username };
        const token = jwt.sign({ user: body }, config.jwtSecret, { expiresIn: '1d' });
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
    return next();
  })(req, res, next);
});

module.exports = router;
