import { ProxyState } from "../AppState.js";

class ClockService {
    getClock() {
        setInterval(this.setClock, 1000)
    }

    setClock() {

        //clock is in millitary time and doesn't have a :00 minutes structure
        let date = new Date()
        ProxyState.clock = date.getHours() + ":" + date.getMinutes()

    }
}

export const clockService = new ClockService();