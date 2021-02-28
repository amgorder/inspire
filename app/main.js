import BackgroundImagesController from "./Controllers/BackgroundImagesController.js";
import ClockController from "./Controllers/ClockController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TaskController from "./Controllers/TaskController.js";
//import TodoListController from "./Controllers/TodoListController.js";
import WeatherController from "./Controllers/WeatherController.js";


class App {
  backgroundImagesController = new BackgroundImagesController();
  weatherController = new WeatherController();
  quotesController = new QuotesController();
  clockController = new ClockController();
  //todoListController = new TodoListController();
  taskController = new TaskController();


}

window["app"] = new App();