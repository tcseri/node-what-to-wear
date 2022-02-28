const { knex } = require("../config/database");
const wears = knex("wear");
exports.Wear = class {
  id = null;

  constructor({ name, minTemp, maxTemp }) {
    name;
    minTemp;
    maxTemp;
  }

  save = async () =>
    await wears.insert(
      {
        name,
        minTemp,
        maxTemp,
      },
      ["id"]
    );

  static getAllWears = async () => await wears.select();

  static getWearById = async (id) =>
    await wears.where({ id: id }).select().first();

  static removeWearsById =async (id) => {
    await wears.where({ id: id }).del();
  };

  static getWearsInTemp = async (temp) => {
    await wears
      .where("minTemp", ">", temp)
      .andWhere("maxTemp", "<", temp)
      .select();
  };
};
