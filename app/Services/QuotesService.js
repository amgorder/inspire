import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { sandboxApi } from "./AxiosService.js"

class QuotesService {


    constructor() {
        this.getQuotes()
    }


    async getQuotes() {
        try {
            const res = await sandboxApi.get("quote")
            ProxyState.quote = new Quote(res.data)

            console.log(ProxyState.quote);
        } catch (error) {
            console.error('getQuotes Error retriving images');
        }
    }

}

export const quoteService = new QuotesService();