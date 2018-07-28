const Faction = require('../models/factionModel');

module.exports.getAll = async (req, res) => {
  try {
    const factions = await Faction.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(factions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.getAllForWorld = async (req, res) => {
  // TODO: verify user have access to that world
  try {
    const factions = await Faction.find({ world: req.params.worldId });
    res.setHeader('Content-Type', 'application/json');
    res.json(factions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.getFaction = async (req, res) => {
  try {
    const faction = await Faction.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.json(faction);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.createFaction = async (req, res) => {
  try {
    const body = Object.assign({}, req.body, { world: '5b53f1bf3a8ade2d6b5b3b52' }) || {};
    const faction = await Faction.create(body);
    res.setHeader('Content-Type', 'application/json');
    res.json(faction);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.updateFaction = async (req, res) => {
  // TODO: validate user access, prevent editing world field
  try {
    const body = req.body || {};
    const faction = await Faction.findByIdAndUpdate({ _id: req.params.id }, body, { new: true });
    res.setHeader('Content-Type', 'application/json');
    res.json(faction);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
