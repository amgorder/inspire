
import { ProxyState } from "../AppState.js";

class ClockService {
    getClock() {
        setInterval(this.setClock, 1000)
    }

    setClock() {
        let date = new Date()
        ProxyState.clock = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        if (date.getHours() > 16) {
            ProxyState.greeting = "Good Evening, "
        } else if (date.getHours() > 11) {
            ProxyState.greeting = "Good Afternoon, "
        } else {
            ProxyState.greeting = "Good Morning, "
        }
    }
}


export const clockService = new ClockService();