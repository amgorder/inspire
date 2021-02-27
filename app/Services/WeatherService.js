import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { sandboxApi } from "./AxiosService.js"

class WeatherService {


  constructor() {
    this.getWeather()
  }



  async getWeather() {
    try {
      const res = await sandboxApi.get("weather")
      ProxyState.weather = new Weather(res.data)
    } catch (error) {
      console.error('getWeather Error retriving weather');
    }
  }

  fahrenheit() {
    let fahrenheit = (((ProxyState.weather.temp - 273.15) * 1.8) + 32);
    console.log(fahrenheit);
  }
}

export const weatherService = new WeatherService();