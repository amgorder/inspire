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
            const res = await sandboxApi.get('todoList')
            ProxyState.todoList = res.data.map(rawTodoList => new TodoList(rawTodoList))
        } catch (error) {
            console.error('getTodoList Error retriving todoList');
        }
    }

    //PUT
    async createTodo(rawTask) {
        try {
            const res = await sandboxApi.post('todoList', rawTask)
            ProxyState.todoList = [...ProxyState.todoList, new TodoList(res.data)]
        } catch (error) {
            console.error('New Task ERROR');
        }
    }

    //STRIKETHOUGH
    async taskComplete(id) {
        let completedTask = ProxyState.todoList.find(ct => ct.id === id)
        //apply strikethrough here? 
        try {
            const res = await sandboxApi.put('Aaron/' + id, completedTask)
            ProxyState.todoList = ProxyState.todoList
        } catch (error) {
            console.error('Completed Task ERROR')

        }
    }

    //REMOVE TASK
    async removeTask(id) {
        try {
            const res = await sandboxApi.delete(`Aaron/${id}`)
            this.getTodoList()
        } catch (error) {
            console.error('Remove Task ERROR')
        }
    }



}

export const todoListService = new TodoListService();