import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";

//Private
function _drawClock() {
    document.getElementById('clock').innerHTML = ProxyState.clock
}

//Public
export default class ClockController {
    constructor() {
        ProxyState.on("clock", _drawClock)
        this.getClock()
    }
    getClock() {
        clockService.getClock()
    }
}