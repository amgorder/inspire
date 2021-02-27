import BackgroundImagesController from "./Controllers/BackgroundImagesController.js";
import WeatherController from "./Controllers/WeatherController.js";



class App {
  valuesController = new BackgroundImagesController();
  weatherController = new WeatherController();
}

window["app"] = new App();
