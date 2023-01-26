import modals from "./modules/modals";
import sliders from "./modules/sliders"
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/menuBurger";
import scrolling from "./modules/scroling";

window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    modals()
    sliders({
        slideItems: ".feedback-slider-item",
        dir: "",
        prevButton: ".main-prev-btn",
        nextButton: ".main-next-btn"
    })
    sliders({
        slideItems: ".main-slider-item",
        dir: "vertical",
        prevButton: "",
        nextButton: ""
    })
    forms()
    mask(`[name="phone"]`)
    checkTextInputs(`[name="name"]`)
    checkTextInputs(`[name="message"]`)
    showMoreStyles(`.button-styles`, `#styles .row`)
    calc({
        size: "#size",
        material: "#material",
        option: "#options",
        promo: ".promocode",
        result: ".calc-price"
    })
    filter()
    pictureSize(".sizes-block")
    accordion(".accordion-heading")
    burger(".burger-menu", ".burger")
    scrolling(".pageup")
})