import BackgroundImagesController from "./Controllers/BackgroundImagesController.js";
import ClockController from "./Controllers/ClockController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeatherController from "./Controllers/WeatherController.js";



class App {
  valuesController = new BackgroundImagesController();
  weatherController = new WeatherController();
  quotesController = new QuotesController();
  clockController = new ClockController();
}

window["app"] = new App();
