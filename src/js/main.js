import modals from "./modules/modals";
import sliders from "./modules/sliders"
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";

window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    modals()
    sliders({ slideItems: ".feedback-slider-item", dir: "", prevButton: ".main-prev-btn", nextButton: ".main-next-btn" })
    sliders({ slideItems: ".main-slider-item", dir: "vertical", prevButton: "", nextButton: "" })
    forms()
    mask(`[name="phone"]`)
    checkTextInputs(`[name="name"]`)
    checkTextInputs(`[name="message"]`)
    showMoreStyles(`.button-styles`, `#styles.row`)// ошибка в консоли
    //showMoreStyles(`.button-styles`, `.row`)    //без "#styles" блок появляется, ошибки не возникает (вверху страницы)

})