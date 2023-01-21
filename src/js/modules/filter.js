const filter = () => {
    const menu = document.querySelector(".portfolio-menu");
    const menuItems = menu.querySelectorAll("li");
    const wrapperSample = document.querySelector(".portfolio-wrapper");
    const noPortfolio = document.querySelector(".portfolio-no");
    const allSample = wrapperSample.querySelectorAll(".all")

    const createElement = (selectorName) => {
        const btn = menu.querySelector(selectorName);
        btn.addEventListener("click", () => {
            filterFunc(selectorName);
        });
    };

    const filterFunc = (selector) => {
        let sample = wrapperSample.querySelectorAll(selector);
        allSample.forEach((sample) => {
            sample.style.display = "none";
            sample.classList.remove("animated", "fadeIn");
        });
        noPortfolio.style.display = "none";
        noPortfolio.classList.remove("animated", "fadeIn");

        if (selector != ".grandmother" && selector != ".granddad") {
            if (sample == allSample) {
                sample.style.display = "block";
                sample.classList.add("animated", "fadeIn");
            } else if (sample != undefined) {
                sample.forEach((sample) => {
                    sample.style.display = "block";
                    sample.classList.add("animated", "fadeIn");
                });
            }
        } else {
            noPortfolio.style.display = "block";
            noPortfolio.classList.add("animated", "fadeIn");
        }
    };

    createElement(".all");
    createElement(".lovers");
    createElement(".chef");
    createElement(".girl");
    createElement(".guy");
    createElement(".granddad");
    createElement(".grandmother");

    menu.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.tagName == "LI") {
            menuItems.forEach((item) => item.classList.remove("active"));
            target.classList.add("active");
        }
    });
};

export default filter;
