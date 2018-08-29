const World = require('../models/worldModel');

module.exports.getAll = async (req, res) => {
  try {
    const worlds = await World.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(worlds);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// TODO: HEY SHOULDN'T WE BE ABLE TO GET WORLDS PER USER YA SPOON

module.exports.getOne = async (req, res) => {
  try {
    // TODO: Validate that the user can access that world
    // TODO: actually grok middleware
    const world = await World.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.json(world);
  } catch (error) {
    console.log('HI');
    console.log(error);
    res.sendStatus(error.status);
  }
};

module.exports.createWorld = async (req, res) => {
  try {
    const body = req.body || {};
    const world = await World.create(body);
    res.setHeader('Content-Type', 'application/json');
    res.json(world);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.updateWorld = async (req, res) => {
  try {
    const body = req.body || {};
    const world = await World.findByIdAndUpdate({ _id: req.params.id }, body, { new: true });
    res.setHeader('Content-Type', 'application/json');
    res.json(world);
  } catch (error) {
    // TODO: real error handling lol
    console.log(error);
    res.sendStatus(500);
  }
};
