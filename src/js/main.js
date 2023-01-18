import modals from "./modules/modals";
import sliders from "./modules/sliders"
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";

window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    modals()
    sliders({ slideItems: ".feedback-slider-item", dir: "", prevButton: ".main-prev-btn", nextButton: ".main-next-btn" })
    sliders({ slideItems: ".main-slider-item", dir: "vertical", prevButton: "", nextButton: "" })
    forms()
    mask(`[name="phone"]`)
    checkTextInputs(`[name="name"]`)
    checkTextInputs(`[name="message"]`)
})