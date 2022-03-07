import axios from "axios";

const lat = 47.1625;
const lon = 19.5033;
const weatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${process.env.WEATHER_API_KEY}`;
const dayInSec = 60 * 60 * 24;

export interface Temps {
  date: number;
  temp: number;
}
export interface WeatherInterface {
  lastModified: number;
  tempsOfDays: Temps[];
}

export class Weather implements WeatherInterface {
  lastModified: number = null;
  tempsOfDays: Temps[] = null;
  constructor() {
    this.lastModified = new Date().getTime();
    this.update();
  }

  update = async () => {
    axios
      .get(weatherAPI)
      .then((response) => {
        this.tempsOfDays = response.data.daily.reduce(
          (temps: Temps[], day: any) => {
            temps.push({ date: day.dt, temp: day.temp.day });
            return temps;
          },
          []
        );
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getTempForDate = (dateInSec: number) =>
    // timestemp in between the day and the day +1 day
    this.tempsOfDays.find(
      (day) => day.date < dateInSec && dateInSec < day.date + dayInSec
    )?.temp;
}
