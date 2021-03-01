export default class Quote {
    constructor(data) {
        this.id = data._id
        this.content = data.content
        this.author = data.author
    }

    get Template() {

        return /*html*/`
        <div class="wrap">
        <h4 class="mb-2 text-dark quote w" >${this.content}</h4>
        <h5 class="m-3 author c"> ${this.author}</h5>
        </div>
        `
    }
}