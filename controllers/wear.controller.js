const { Wear } = require("../models/wear.model");

exports.addWear = async (req, res, next) => {
  try {
    const wear = new Wear(req.body);
    await wear.save();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

exports.getWear = async (req, res, next) => {
  try {
    res.send(await Wear.getWearsInTemp(req.body));
  } catch (error) {
    next(error);
  }
};
