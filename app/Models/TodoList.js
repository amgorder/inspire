export default class TodoList {
    constructor(data) {
        this.task = data.task
        this.id = data.id || data._id
    }

    get Template() {

        return /*html*/ `
        <div class="col-6">
        <div class="form-check">
        <label class="form-check-label m-2"
        <div class="card-body">
            <h4 class="card-title">${this.task}</h4>

        </div>
        </div>
    </div>
        `

    }
}