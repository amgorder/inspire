import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";


//Private
function _drawQuotes() {
    document.getElementById("quote").innerHTML = ProxyState.quote.Template
}

//Public
export default class QuotesController {
    constructor() {
        ProxyState.on("quote", _drawQuotes);
    }

}
