const Place = require('../models/placeModel');

module.exports.getAll = async (req, res) => {
  try {
    const places = await Place.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(places);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.getAllForWorld = async (req, res) => {
  // TODO: verify user have access to that world
  try {
    const place = await Place.find({ world: req.params.worldId });
    res.setHeader('Content-Type', 'application/json');
    res.json(place);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.getOne = async (req, res) => {
  // TODO: how we gonna track worlds, yo?
  try {
    const place = await Place.findById(req.params.id);
    res.setHeader('Content-Type', 'application/json');
    res.json(place);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.createPlace = async (req, res) => {
  try {
    const body = Object.assign({}, req.body, { world: '5b53f1bf3a8ade2d6b5b3b52' }) || {};
    const place = await Place.create(body);
    res.setHeader('Content-Type', 'application/json');
    res.json(place);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports.updatePlace = async (req, res) => {
  // TODO: validate user access, prevent editing world field
  try {
    const body = req.body || {};
    const place = await Place.findByIdAndUpdate({ _id: req.params.id }, body, { new: true });
    res.setHeader('Content-Type', 'application/json');
    res.json(place);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
