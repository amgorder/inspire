import { ProxyState } from "../AppState.js";

class ClockService {
    getClock() {
        setInterval(this.setClock, 1000)
    }

    setClock() {
        let date = new Date()
        let h = date.getHours();
        let m = date.getMinutes();
        let session = "AM"
        if (h == 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }


        let min = (m < 10) ? "0" + m : m;
        let time = h + ":" + min + session;
        ProxyState.clock = time
    }
}

export const clockService = new ClockService();