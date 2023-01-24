const burger = (menuSelector, burgerSelector) => {
    const menu = document.querySelector(menuSelector);
    const burger = document.querySelector(burgerSelector);
    const widthAdapt = 992;
    menu.style.display = "none";

    burger.addEventListener("click", () => {
        menu.style.display = (menu.style.display === "none" && window.screen.availWidth <= widthAdapt)
            ? "block"
            : "none";
    });

    window.addEventListener("resize", () => {
        if (window.screen.availWidth > widthAdapt) {
            menu.style.display = "none";
        }
    });
};

export default burger;
