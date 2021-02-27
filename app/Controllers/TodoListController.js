import { ProxyState } from "../AppState.js";
import { todoListService } from "../Services/TodoListService.js";


//Private
function _drawTodoList() {
    let tasks = ProxyState.todoList
    let template = ""

    tasks.forEach(task => template += task.Template)
    document.getElementById('current-todoList').innerHTML = template
    console.log(ProxyState.todoList);

}

//Public
export default class TodoListController {
    constructor() {
        ProxyState.on("todoList", _drawTodoList);
    }

}
