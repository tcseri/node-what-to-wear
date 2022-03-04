const axios = require("axios");

const lat = 47.1625;
const lon = 19.5033;
const weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${process.env.WEATHER_API_KEY}`;
const dayInSec = 60 * 60 * 24;

exports.Weather = class {
  lastModified = null;
  tempsOfDays = null;
  constructor() {
    this.lastModified = new Date();
    this.update();
  }

  update = async () => {
    axios
      .get(weatherAPI)
      .then((response) => {
        this.tempsOfDays = response.data.daily.reduce((temps, day) => {
          temps.push({ date: day.dt, temp: day.temp.day });
          return temps;
        }, []);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getTempForDate = (dateInSec) =>
    // timestemp in between the day and the day +1 day
    this.tempsOfDays.find(
      (day) => day.date < dateInSec && dateInSec < day.date + dayInSec
    )?.temp;
};
