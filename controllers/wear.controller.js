const { Wear } = require("../models/wear");

exports.addWear = async (req, res, next) => {
  try {
    const wear = new Wear(req.body);
    await wear.save();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

exports.getWearInTemp = async (req, res, next) => {
  try {
    res.send(await Wear.getWearsInTemp(req.body));
  } catch (error) {
    next(error);
  }
};

exports.getAllWears = async (req, res, next) => {
  try {
    res.send(await Wear.getAllWears());
  } catch (error) {
    next(error);
  }
};

exports.getWearsForDate = async (req, res, next) => {
  try {
    // await service date to temp;
    // return getWearInTemp
  } catch (error) {
    next(error);
  }
};
