import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"

//private draw function
function _drawTask() {
    let todo = ProxyState.task
    let template = ''
    todo.forEach(t => template += t.Template)
    document.getElementById("item").innerHTML = template
}


export default class TaskController {
    constructor() {
        ProxyState.on('task', _drawTask)
    }

    createTask(event) {
        event.prventDefault();
        let form = event.target
        let rawPizza = {
            task: form.task.value
        }
        taskService.createTask(rawPizza)
    }

}