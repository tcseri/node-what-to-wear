import { NextFunction, Request, Response } from "express";
import { Weather } from "../models/weather";
import { Wear } from "../models/wear";

const weatherData = new Weather();
const weatherDataExpirationTime = 1000 * 60 * 60 * 24;

export const addWear = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, mintemp, maxtemp } = req.body;
    const wear = new Wear(name, mintemp, maxtemp);
    res.send(await wear.save());
  } catch (error) {
    next(error);
  }
};

export const getWearInTemp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.send(await Wear.getWearsInTemp(req.body));
  } catch (error) {
    next(error);
  }
};

export const getAllWears = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.send(await Wear.getAllWears());
  } catch (error) {
    next(error);
  }
};

export const getWearsForDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      new Date().getTime() - weatherData.lastModified >
      weatherDataExpirationTime
    ) {
      await weatherData.update();
    }
    // tslint:disable-next-line:no-bitwise
    const temp = ~~weatherData.getTempForDate(+req.params.date);
    res.send({ temp, wears: await Wear.getWearsInTemp(temp) });
  } catch (error) {
    next(error);
  }
};
