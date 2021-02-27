import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"

class QuotesService {
    constructor() {
        this.getQuotes()
        console.log("qs");
    }

    async getQuotes() {
        try {
            const res = await sandboxApi.get("quotes")
            ProxyState.quote = new Quote(res.data)
        } catch (error) {
            console.error('getQuotes Error retriving quotes');
        }
    }
}

export const quotesService = new QuotesService();