const router = require('express').Router();
const placeController = require('../controllers/place');

// debug route
router.get('/places', placeController.getAll);
// get all places for a given world
router.get('/places/:worldId', placeController.getAllForWorld);
// get specific info for place
router.get('/place/:id', placeController.getOne);
router.post('/place', placeController.createPlace);
router.put('/place/:id', placeController.updatePlace);

module.exports = router;
