export default class Weather {
    constructor(data) {
        this.id = data.id
        this.temp = data.main.temp
        this.weather = data.weather[0].main
        this.icon = data.weather[0].icon
        this.name = data.name
    }

    get Template() {

        return /*html*/`
        <div>
           <p>In ${this.name} the temp. is ${this.temp}K and there is ${this.weather} outside.</p> 
        </div>
        `
    }
}