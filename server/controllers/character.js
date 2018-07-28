const Character = require('../models/characterModel');

module.exports.getAll = async (req, res) => {
  try {
    const characters = await Character.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.getAllForWorld = async (req, res) => {
  // TODO: verify user have access to that world
  try {
    const characters = await Character.find({ world: req.params.worldId });
    res.setHeader('Content-Type', 'application/json');
    res.json(characters);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.getcharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.json(character);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.createcharacter = async (req, res) => {
  try {
    const body = Object.assign({}, req.body, { world: '5b53f1bf3a8ade2d6b5b3b52' }) || {};
    const character = await Character.create(body);
    res.setHeader('Content-Type', 'application/json');
    res.json(character);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.updatecharacter = async (req, res) => {
  // TODO: validate user access, prevent editing world field
  try {
    const body = req.body || {};
    const character = await Character.findByIdAndUpdate(
      { _id: req.params.id },
      body,
      { new: true },
    );
    res.setHeader('Content-Type', 'application/json');
    res.json(character);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
