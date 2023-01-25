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

    const element = document.documentElement;
    const body = document.body;

    const calcScroll = () => {
        upElem.addEventListener("click", function (e) {
            // повесили обработчик на стрелку
            let scrollTop = Math.round(body.scrollTop || element.scrollTop); // переменая показывает сколько прокрутили
      /*??? */ if (this.hash !== "") {
                // если у секции, в которой находится стрелка, хещ != "",            //но ведь хеш (#) задан только у header
                e.preventDefault();

                let hashElement = document.querySelector(this.hash); // получает  хеш того элемента, на который нужно перейти (header)

                //  console.log(this.hash) // up
                //  console.log(hashElement) //  header
                //console.log(hashElement.offsetParent)   // родитель header - body
                //console.log(hashElement.offsetTop) // растояние от текущего расположения стрелки до body

                let hashElementTop = 0; // сколько нужно пролистать до родителя header(до body??)

                while (hashElement.offsetParent) {
                    // пока у header есть родитель
                    hashElementTop += hashElement.offsetTop;
                    console.log(hashElementTop);
                    hashElement = hashElement.offsetParent;
                }
                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1;
        let prevScrolTop;
        let speed
        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);
            if (
                prevScrolTop === scrollTop ||
                (to > from && scrollTop >= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(
                    history.state,
                    document.title,
                    location.href.replace(/#.*$/g, "") + hash
                );
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrolTop = scrollTop;
            }
        }, timeInterval);
    };

    calcScroll();
};
export default scrolling;

