import { ProxyState } from "../AppState.js";
import { backgroundImagesService } from "../Services/BackgroundImagesService.js";

//Private
function _drawBackgroundImage() {
  document.body.style.backgroundImage = `url('${ProxyState.backgroundImages}')`

}

//Public
export default class BackgroundImagesController {
  constructor() {
    ProxyState.on("backgroundImages", _drawBackgroundImage);
    _drawBackgroundImage()
  }
}
