export default class TodoList {
    constructor({ task, completed, id }) {
        this.task = task
        this.completed = completed
        this.id = id
    }

    get Template() {

        return /*html*/ `
        <div class="card">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer"
            onclick="app.todoListController.deleteTask('${this.id}')" aria-hidden="true"></i>

        <div class="card-body">
            <h4 class="card-title">${this.task}</h4>

            <button class="btn btn-info pointer" onclick="app.todoListController.complete('${this.id}')">strike
                through ${this.task}</button>
        </div>
    </div>
        `

    }
}