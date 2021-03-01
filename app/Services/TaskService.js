import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { todoApi } from "./AxiosService.js"

class TaskService {
    constructor() {

        this.getTask()
    }

    //GET
    async getTask() {
        try {
            const res = await todoApi.get('')
            ProxyState.task = res.data.map(rawPizzaData => new Task(rawPizzaData))

        } catch (error) {
            console.error(error);
        }

    }
    //POST
    async createTask(rawPizza) {
        try {
            const res = await todoApi.post('', rawPizza)
            this.getTask();
        } catch (error) {
            console.error(error);
        }

    }

}

export const taskService = new TaskService();