import { ProxyState } from "../AppState.js";
import { todoListService } from "../Services/TodoListService.js";


//Private
function _drawTodoList() {
    let tasks = ProxyState.todoList
    let template = ""
    tasks.forEach(task => template += task.Template)
    document.getElementById('task').innerHTML = template
    console.log(ProxyState.todoList);

}

//Public
export default class TodoListController {
    constructor() {
        _drawTodoList()
        ProxyState.on("todoList", _drawTodoList);
    }

    createTodo(event) {
        debugger
        event.preventDefault();
        let form = event.target
        let rawTask = {
            task: form.task.value,
        }
        todoListService.createTodo(rawTask)
    }

    taskComplete(id) {
        todoListService.taskComplete(id)
    }

    removeTask(id) {
        todoListService.removeTask(id)
    }
}
