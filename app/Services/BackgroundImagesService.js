import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"

class BackgroundImagesService {
  constructor() {
    this.getBackgroundImage()
  }
  async getBackgroundImage() {
    try {
      const res = await sandboxApi.get("images")
      ProxyState.backgroundImages = res.data.url
    } catch (error) {
      console.error('getBackgroundImage Error retriving images');
    }
  }
}
export const backgroundImagesService = new BackgroundImagesService();

