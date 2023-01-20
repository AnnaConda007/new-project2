const filter = () => {
    const menu = document.querySelector(".portfolio-menu");
    const menuItems = menu.querySelectorAll("li");
    const wrapper = document.querySelector(".portfolio-wrapper");
    const no = document.querySelector(".portfolio-no");
    const allSample = wrapper.querySelectorAll(".all")
    const createElement = (selectorName) => {
        const btn = document.querySelector(selectorName);
        btn.addEventListener("click", () => {
            filterFunc(selectorName);
        });
    };
    const filterFunc = (selector) => {
        let NameSample = wrapper.querySelectorAll(selector);

        allSample.forEach((sample) => {
            sample.style.display = "none";
            sample.classList.remove("animated", "fadeIn");
        });
        no.style.display = "none";
        no.classList.remove("animated", "fadeIn");

        if (NameSample == allSample) {
            sample.style.display = "block";
            sample.classList.add("animated", "fadeIn");
        } else if (NameSample != undefined) {
            NameSample.forEach((NameSample) => {
                NameSample.style.display = "block";
                NameSample.classList.add("animated", "fadeIn");
            });
        } else {
            no.style.display = "block";
            no.classList.add("animated", "fadeIn");
        }
    };

    const btnAll = createElement(".all");
    const btnLovers = createElement(".lovers");
    const btnChef = createElement(".chef");
    const btnGirl = createElement(".girl");
    const btnGuy = createElement(".guy");
    const btnGrandmother = createElement();
    const btnGranddad = createElement();

    menu.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.tagName == "LI") {
            menuItems.forEach((item) => item.classList.remove("active"));
            target.classList.add("active");
        }
    });
};

export default filter;
