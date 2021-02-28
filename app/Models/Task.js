

export default class Task {
    constructor(data) {
        this.id = data.id || data._id
        this.task = data.task
        this.count = data.count || 0
        this.finished = data.finished
    }

    get Template() {

        return /*html*/`
        <div>
        ${this.task}
        </div>
        `

    }
}