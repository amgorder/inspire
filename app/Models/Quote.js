export default class Quote {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }

    get Template() {

        return /*html*/`
        <div class="card">
            ${this.content}
        </div>
        `
    }
}