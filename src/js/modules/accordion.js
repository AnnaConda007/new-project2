const accordion = (triggers) => {
    const btns = document.querySelectorAll(triggers);

    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active-style"); // toggle  если класс есть, то он его убирает, если класса нет, то добавляет
            this.nextElementSibling.classList.toggle("active-content");

            this.nextElementSibling.style.maxHeight = this.classList.contains("active-style") ?
                `${this.nextElementSibling.scrollHeight}80px` : // если this.classList.contains("active-style") возр true
                `0`; // если this.classList.contains("active-style") возр false

        });
    });
};

export default accordion;

//const blocks = document.querySelectorAll(items)
/*
        blocks.forEach(block => {
            block.classList.add("animated", "fadeInDown")
        })
    
        btns.forEach(btn => {
            btn.addEventListener("click", function () {   // при клике на кнопку
                if (!this.classList.contains("active")) { // если кнопка не содержит класса "active"
                    btns.forEach(btn => {
                        btn.classList.remove("active", "active-style") // то у всех кнопок удаляются классы активности
                    })
                    this.classList.add("active", "active-style") // кликнутой кнопке класс добавляется 
                }
            })
        })
    */
