exports.Wear = class {
  id = null;

  constructor({ name, minTemp, maxTemp }) {
    name;
    minTemp;
    maxTemp;
  }

  save = () => {
    console.log("todo save");
  };

  static getWears = () => {
    console.log("todo getWears");
  };

  static getWearById = (id) => {
    console.log("todo getWearById");
  };

  static removeWearsById = (id) => {
    console.log("todo removeWearsById");
  };

  static getWearsInTemp = () => {
    console.log("todo getWearsInTemp");
  };
};
