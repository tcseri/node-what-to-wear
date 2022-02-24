const { knex } = require("/config/database.conf");
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

  static getWears = async () => await wears.select();

  static getWearById = async (id) =>
    await wears.where({ id: id }).select().first();

  static removeWearsById = (id) => {
    await wears.where({ id: id }).del();
  };

  static getWearsInTemp = (temp) => {
    await wears
      .where("minTemp", ">", temp)
      .andWhere("maxTemp", "<", temp)
      .select();
  };
};
