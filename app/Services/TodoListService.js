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
            ProxyState.todoList = res.data.map(rawTodo => new TodoList(rawTodo))
        } catch (error) {
            console.error(error);
        }
    }

    //PUT
    async createTodo(rawTask) {
        try {
            const res = await sandboxApi.post('gorder/todos', rawTask)
            this.getTodoList();
            console.log(res);
        } catch (error) {
            console.error(error);
        }

    }

    //STRIKETHOUGH
    async taskComplete(id) {
        let completedTask = ProxyState.todoList.find(ct => ct.id === id)
        //apply strikethrough here? 
        try {
            const res = await sandboxApi.put('' + id, completedTask)
            ProxyState.todoList = ProxyState.todoList
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