export default class Weather {
    constructor(data) {
        this.id = data.id
        this.temp = data.main.temp
        this.weather = data.weather[0].main
        this.icon = data.weather[0].icon
        this.name = data.name
    }

    //http://openweathermap.org/img/wn/10d@2x.png
    //replace 10d with this.icon for weather icons
    get Template() {

        return /*html*/`
        <div class="text-secondary">
           <p>In ${this.name} the temp. is ${this.temp} F and there is ${this.weather} outside.</p> 
           <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="">
        </div>
        `
    }
}



