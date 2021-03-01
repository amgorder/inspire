import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


//Private
function _drawWeather() {

    document.getElementById("current-weather").innerHTML = ProxyState.weather.Template

}

//Public
export default class WeatherController {
    constructor() {
        ProxyState.on("weather", _drawWeather);
    }

}
