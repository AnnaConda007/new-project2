import modals from "./modules/modals";
import sliders from "./modules/sliders"

window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    modals()
    sliders({ slideItems: ".feedback-slider-item", dir: "", prevButton: ".main-prev-btn", nextButton: ".main-next-btn" })
    sliders({ slideItems: ".main-slider-item", dir: "vertical", prevButton: "", nextButton: "" })
})