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
            const res = await sandboxApi.get('gorder/todos/')
            ProxyState.todoList = res.data.map(t => new TodoList(t))
        } catch (error) {
            console.error(error);
        }
    }

    //PUT
    async createTodo(rawTask) {
        try {
            const res = await sandboxApi.post('gorder/todos/', rawTask)
            ProxyState.todoList = [...ProxyState.todoList, new TodoList(res.data)]
        } catch (error) {
            console.error(error);
        }

    }

    //REMOVE TASK
    async removeTask(id) {
        try {
            // const res = await sandboxApi.delete(`gorder/todos/`)
            // this.getTodoList()
            ProxyState.todoList = ProxyState.todoList.filter(td => td.id != id)
        } catch (error) {
            console.error('Remove Task ERROR')
        }
    }
}

export const todoListService = new TodoListService();