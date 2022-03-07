import { knex } from "../config/database";
import { WearInreface } from "./wear.interface";

const wears = knex<WearInreface>("wear");

export class Wear implements WearInreface {
  id: number = null;

  constructor(
    public name: string,
    public mintemp: number,
    public maxtemp: number
  ) {}

  save = async () =>
    await wears.insert(
      {
        name: this.name,
        mintemp: this.mintemp,
        maxtemp: this.maxtemp,
      },
      ["id"]
    );

  static getAllWears = async () => await wears.select();

  static getWearById = async (id: number) =>
    await wears.where({ id }).select().first();

  static removeWearsById = async (id: number) => {
    await wears.where({ id }).del();
  };

  static getWearsInTemp = async (temp: number) =>
    await wears
      .where("mintemp", "<", temp)
      .andWhere("maxtemp", ">", temp)
      .select();
}
