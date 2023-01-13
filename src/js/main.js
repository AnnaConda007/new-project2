import modals from "./modules/modals";
import sliders from "./modules/sliders"

window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    modals()
    let obj = {
        slideItems: ".feedback-slider-item",
        dir: "",
        prevButton: ".main-prev-btn",
        nextButton: ".main-next-btn"
    }
    sliders(obj)


    // sliders(".main-slider-item", "vertical")

})    