const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add("animated", "fadeIn");
            upElem.classList.remove("fadeOut");
        } else {
            upElem.classList.add("fadeOut");
            upElem.classList.remove("fadeIn");
        }
    });


    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            if (this.hash[0] === "#") {
                const targetElemenForScroll = document.querySelector(this.hash);
                scroll(targetElemenForScroll);
            }
        });
    });

    function scroll(target) {
        target.scrollIntoView({ behavior: "smooth" });
    }

};
export default scrolling;





















/*

const element = document.documentElement;
    const body = document.body;

    const calcScroll = () => {
        upElem.addEventListener("click", function (e) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop); // переменая показывает сколько прокрутили
            if (this.hash !== "") {// если элементу, на который кликнули есть хеш (в данном случае это стрелка, хеш которой ведет к header)    
                e.preventDefault();
                let hashElement = document.querySelector(this.hash); // получает  элемент с нужным хеш (сейчас это это header c "up")
                let hashElementTop = 0; // сколько нужно пролистать до родителя header от стрелки(до body??)

                while (hashElement.offsetParent) {// пока у header есть родитель body - то есть всегда
                    hashElementTop += hashElement.offsetTop;//=0  ;возвращает расстояние hashElement(header) по отношению к верхней части hashElement.offsetParent(body)
                    //эта переменная всегда будет = 0, потому что возвразает растояние между границей элемента и его родителем, тогда зачем она ?  
         hashElement = hashElement.offsetParent;   // hashElement = body, зачем нужна эта строка? к тому же hashElement нигде похже не используется?
        }
        hashElementTop = Math.round(hashElementTop);// округляет ноль
        smoothScroll(scrollTop, hashElementTop, this.hash); // scrollTop(сколько прокрутили) hashElementTop(куда перейти)  this.hash(hash стрелки(еще раз куда перейти))
    }
});
};

const smoothScroll = (from, to, hash) => {
let timeInterval = 5;
let prevScrolTop; // сколько пискселй нужно прокурутить до header??
let speed // скорость скрола
if (to > from) { // если высота хеш элемента больше чем текущее место// эта часть не испоьзуется в этом скрипте, никогда.
    speed = 30;
} else {              // если элемент с хешом расположен на меньшей высоте(в верху страницы), чем текущее положение
    speed = -30;

}

let move = setInterval(function () {
    let scrollTop = Math.round(body.scrollTop || element.scrollTop);// показывает сколько пикселей прокручено от начала страницы
    if (
        prevScrolTop === scrollTop ||      //  переменная prevScrolTop с 62 строки = растоянию от элемента до верха страницы, или
        (to > from && scrollTop >= to) ||// текущее положение стрелки в пикселях больше чем верх страницы(0)  и  проскроленное растояние >= положения стрелки в пикселях
        (to < from && scrollTop <= to) //     текущее положение стрелки в пикселях меньше чем верх страницы(0)  и  проскроленное растояние <= положения стрелки в пикселях// это на случай, если элемент к которому нужно перейти расположен вниху страницы?
    ) {
        clearInterval(move);  // зачем очищать интервал? Это происходит если "докрутили" до нужного элемента ?
        history.replaceState(
            history.state,
            document.title,
            location.href.replace(/#.*$/g, "") + hash
        );
    } else {
        body.scrollTop += speed; // увеличиваем скрол от  боди до ?стрелки? на -30(уменьшаем растояние) ? 
        element.scrollTop += speed;// то же самое но с element
        prevScrolTop = scrollTop;// prevScrolTop равна оставшемуся растоянию, перезаписывается 
    }
}, timeInterval);
};


    calcScroll();



*/
