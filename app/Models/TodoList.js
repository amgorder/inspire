export default class TodoList {
    constructor(data) {
        this.id = data.id || data._id;
        this.task = data.task;
        this.count = data.count || 0;
        //true / false
        this.finished = data.finished || false;
    }

    get Template() {

        return /*html*/ `
        
        <form class="form-inline" onsubmit="app.todoListController.completeTask('${this.id}')">
            <h4>${this.task}</h4>
            <button class="btn btn-info" type="submit">Complete</button>
        </form>

        `

    }
}