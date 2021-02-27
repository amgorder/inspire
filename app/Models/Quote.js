export default class Quote {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }

    get Template() {

        return /*html*/`
        <div class="card">
            <h2>${this.content}</h2>
            <h3>${this.author}</h3>
        </div>
        `
    }
}