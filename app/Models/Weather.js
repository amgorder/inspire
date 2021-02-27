
export default class Weather {
    constructor(data) {
        this.id = data.id
        this.temp = data.main.temp
    }

    get Template() {

        return /*html*/`
        <div class="card">
            ${this.temp}
        </div>
        `
    }
}