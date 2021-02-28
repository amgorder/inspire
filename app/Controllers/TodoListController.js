import { ProxyState } from "../AppState.js";
import { todoListService } from "../Services/TodoListService.js";


//Private
function _drawTodoList() {
    let tasks = ProxyState.todoList
    let template = ''
    tasks.forEach(task => template += task.Template)
    document.getElementById("todo").innerHTML = template
}

//Public
export default class TodoListController {
    constructor() {
        ProxyState.on("todoList", _drawTodoList);
    }

    createTodo(event) {
        event.preventDefault();
        let form = event.target
        let rawTask = {
            task: form.task.value,
        }
        todoListService.createTodo(rawTask)
        console.log(ProxyState.todoList);
    }

    taskComplete(id) {
        todoListService.taskComplete(id)
    }

    removeTask(id) {
        todoListService.removeTask(id)
    }
}
