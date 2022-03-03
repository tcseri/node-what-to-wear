const { Wear } = require("../models/wear");
const { Weather } = require("../models/weather");
const weatherData = new Weather();

exports.addWear = async (req, res, next) => {
  try {
    const wear = new Wear(req.body);
    res.send(await wear.save());
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
    if (new Date() - weatherData.lastModified > 1000 * 60 * 60 * 24) {
      await weatherData.update();
    }
    const temp = ~~weatherData.getTempForDate(req.params.date);
    res.send({temp: temp, wears: await Wear.getWearsInTemp(temp)});
  } catch (error) {
    next(error);
  }
};
