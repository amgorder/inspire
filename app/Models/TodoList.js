export default class TodoList {
    constructor(data) {
        this.id = data.id || data._id;
        this.description = data.description;
    }

    get Template() {

        return /*html*/ `
        <div class="card">
        <form class="form-inline" onsubmit="app.todoListController.removeTask(event, '${this.id}')">
            <h4>${this.description}</h4>
            <button class="btn btn-danger" type="submit">Delete</button>
        </form>
        </div>

        `

    }
}