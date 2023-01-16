import modals from "./modules/modals";
import sliders from "./modules/sliders"
import forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    modals()
    sliders({ slideItems: ".feedback-slider-item", dir: "", prevButton: ".main-prev-btn", nextButton: ".main-next-btn" })
    sliders({ slideItems: ".main-slider-item", dir: "vertical", prevButton: "", nextButton: "" })
    forms()
})