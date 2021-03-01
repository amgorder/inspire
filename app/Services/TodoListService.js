import { ProxyState } from "../AppState.js";
import TodoList from "../Models/TodoList.js";
import { sandboxApi } from "./AxiosService.js"


class TodoListService {
    constructor() {
        this.getTodoList()
    }

    //GET
    async getTodoList() {
        try {
            const res = await sandboxApi.get('gorder/todos')
            console.log(res);
            ProxyState.todoList = res.data.map(t => new TodoList(t))

        } catch (error) {
            console.error(error);
        }
    }

    //PUT
    async createTodo(rawTask) {
        try {
            const res = await sandboxApi.post('gorder/todos', rawTask)
            ProxyState.todoList = [...ProxyState.todoList, new TodoList(res.data)]
            console.log(res);
        } catch (error) {
            console.error(error);
        }

    }

    //STRIKETHOUGH
    async taskComplete(id) {
        let completedTask = ProxyState.todoList.find(ct => ct.id === id)

        // true false chech to verify completion
        if (completedTask.finished == false) {
            completedTask.finished = true
        } else {
            completedTask.finished = false
        }
        try {
            const res = await sandboxApi.put('' + id, completedTask)
            this.getTodoList
        } catch (error) {
            console.error('Completed Task ERROR')

        }
    }

    //REMOVE TASK
    async removeTask(id) {
        try {
            const res = await sandboxApi.delete('' + id)
            this.getTodoList()
        } catch (error) {
            console.error('Remove Task ERROR')
        }
    }
}

export const todoListService = new TodoListService();