export default class Quote {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }

    get Template() {

        return /*html*/`
        <div class="card">
            <h5>${this.content}</h5>
            <h5>${this.author}</h5>
        </div>
        `
    }
}