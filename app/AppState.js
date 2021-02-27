
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Weather from "./Models/Weather.js"
import Quote from "./Models/Quote.js"


class AppState extends EventEmitter {
  backgroundImages = ""
  /** @type {Weather} */
  weather = null
  /** @type {Quote} */
  quote = null
  clock = ""
  greeting = ""
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
