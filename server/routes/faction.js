const router = require('express').Router();
const factionController = require('../controllers/faction');

// debug route
router.get('/factions', factionController.getAll);
// get all factions for a given world
router.get('/factions/:worldId', factionController.getAllForWorld);
// get specific info for faction
router.get('/faction/:id', factionController.getFaction);
router.post('/faction', factionController.createFaction);
router.put('/faction/:id', factionController.updateFaction);

module.exports = router;
