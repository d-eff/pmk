const router = require('express').Router();
const passport = require('passport');
const worldController = require('../controllers/world');

router.get('/worlds', passport.authenticate('jwt', { session: false }), worldController.getAll);
router.get('/world/:id', passport.authenticate('jwt', { session: false }), worldController.getOne);
router.post('/world', passport.authenticate('jwt', { session: false }), worldController.createWorld);
router.put('/world/:id', passport.authenticate('jwt', { session: false }), worldController.updateWorld);

module.exports = router;
