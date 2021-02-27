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

      console.log(ProxyState.weather);
    } catch (error) {
      console.error('getWeather Error retriving images');
    }
  }

}

export const weatherService = new WeatherService();