const { knex } = require("../config/database");
const wears = knex("wear");
exports.Wear = class {
  id = null;

  constructor({ name, minTemp, maxTemp }) {
    this.name = name;
    this.minTemp = minTemp;
    this.maxTemp = maxTemp;
  }

  save = async () =>
    await wears.insert(
      {
        name: this.name,
        mintemp: this.minTemp,
        maxtemp: this.maxTemp,
      },
      ["id"]
    );

  static getAllWears = async () => await wears.select();

  static getWearById = async (id) =>
    await wears.where({ id: id }).select().first();

  static removeWearsById = async (id) => {
    await wears.where({ id: id }).del();
  };

  static getWearsInTemp = async (temp) =>
    await wears
      .where("mintemp", "<", temp)
      .andWhere("maxtemp", ">", temp)
      .select();
};
