import BackgroundImagesController from "./Controllers/BackgroundImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeatherController from "./Controllers/WeatherController.js";



class App {
  valuesController = new BackgroundImagesController();
  weatherController = new WeatherController();
  quotesController = new QuotesController();
}

window["app"] = new App();
