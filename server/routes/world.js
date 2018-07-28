const router = require('express').Router();
const worldController = require('../controllers/world');

router.get('/worlds', worldController.getAll);
router.get('/world/:id', worldController.getOne);
router.post('/world', worldController.createWorld);
router.put('/world/:id', worldController.updateWorld);

module.exports = router;
