import { NextFunction, Request, Response } from "express";
// const { Wear } = require("../models/wear");
// const { Weather } = require("../models/weather");
// const weatherData = new Weather();
const weatherDataExpirationTime = 1000 * 60 * 60 * 24;

// exports.addWear = async (req, res, next) => {
//   try {
//     const wear = new Wear(req.body);
//     res.send(await wear.save());
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getWearInTemp = async (req, res, next) => {
//   try {
//     res.send(await Wear.getWearsInTemp(req.body));
//   } catch (error) {
//     next(error);
//   }
// };

export const getAllWears = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('sss');// await Wear.getAllWears());
  } catch (error) {
    next(error);
  }
};

// exports.getWearsForDate = async (req, res, next) => {
//   try {
//     if (new Date() - weatherData.lastModified > weatherDataExpirationTime) { // egy nextDay konstasba
//       await weatherData.update();
//     }
//     const temp = ~~weatherData.getTempForDate(req.params.date);
//     res.send({temp, wears: await Wear.getWearsInTemp(temp)});
//   } catch (error) {
//     next(error);
//   }
// };
