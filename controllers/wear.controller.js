const { Wear } = require("../models/wear");
const { Weather } = require("../models/weather");
const weatherData = new Weather();

exports.addWear = async (req, res, next) => {
  try {
    const wear = new Wear(req.body);
    const newId = await wear.save();
    console.log(wear, newId);
    res.send(newId);
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
    const aaa = await Wear.getWearsInTemp(temp) 
    console.log(aaa);
    res.send(aaa);
  } catch (error) {
    next(error);
  }
};
