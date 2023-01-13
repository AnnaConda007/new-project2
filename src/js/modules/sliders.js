/*
1. Первый вызов showSlides
 Сначала вызывается функция showSlides с аргументом, в котором указывается переменная с номером нужного слайда проходит проверка: если 
значение переменной больше чем колличество слайдов, переменной присваеивается новое значение - "1", если меньше чем колличесто слайдов, 
переменной присваивается значение равное all_Slides.length(колличество всех слайдов).  
 Далее скрываются все слайды. И после слайду с индексом равным (значение переданной переменной-1) устанавливается display="block"
 2.Вызов функции nextSlide
  Потом при каждом нажатии кнопок next/prew вызывается функция nextSlide, она увеличивает индекс на 1/-1, и внутри себя каждый раз
снова вызывает функцию showSlides с обновленным индексом. 
И теперь при каждом нажатии на кнопку след/пред переменная с номером слайда увеличивается/уменьшается на 1. Новое значение проходит 
проверку и нужному блоку устанавливается display="block" 
3. Вызывается функция  activAutoslider() - автоматический слайдер
В функции activAutoslider проверяется какое направление передалось при вызове функции. И внутри этой функции вызывается setInterval, который 
постоянно вызывевает функцию nextSlide.  setInterval изначально задается индификатор pausesetInterval. 
4.при наведении мыши слайдер останавливается: обращаемся к родителю all_Slides, и ему задается соответсвующий обработчик событий
Когда пользователь новодит мышку на слайдер просиходит clearInterval(pausesetInterval). Когда убирает - снова вызывается activAutoslider()
 */
////////
const sliders = (obj) => {
    let indexOfShowSlide = 1;
    let pausesetInterval;
    const all_Slides = document.querySelectorAll(obj.slideContent);

    let showSlides = (numOfshowingSlide) => {
        if (numOfshowingSlide > all_Slides.length) {
            indexOfShowSlide = 1;
        }
        if (numOfshowingSlide < 1) {
            indexOfShowSlide = all_Slides.length; //length возвращает КОЛЛИЧЕСТВО элементов в массиве, а не индекс последнего элемента
        }
        all_Slides.forEach((slide) => {
            slide.classList.add("animated"); // стиль, не влияющий на работу js
            slide.style.display = "none ";
        });
        all_Slides[indexOfShowSlide - 1].style.display = "block"; // "-1" потому что индекс в all_Slides считается с 0
    }
    showSlides(indexOfShowSlide);

    let nextSlide = (UnitOfСhange) => {
        indexOfShowSlide += UnitOfСhange;
        showSlides(indexOfShowSlide);
    }
    try {
        // try нужно что бы не возникало ошибки, если при вызове функции в main будут переданы не все параметры. Так как для вызова функци в таймере не нужны кнопки вызова след слайда
        const prevBtn = document.querySelector(obj.prevButton);
        const nextBtn = document.querySelector(obj.nextButton);

        prevBtn.addEventListener("click", () => {
            nextSlide(-1);
            /*  all_Slides[indexOfShowSlide - 1].classList.remove("slideInLeft")// просто стили, слайды "выплывают", не влияет на js*/
            /* all_Slides[indexOfShowSlide - 1].classList.add("slideInRight") // просто стили, слайды "выплывают", не влияет на js*/
        });

        nextBtn.addEventListener("click", () => {
            nextSlide(1);
            /*all_Slides[indexOfShowSlide - 1].classList.remove("slideInRightt")// просто стили, слайды "выплывают", не влияет на js*/
            /*  all_Slides[indexOfShowSlide - 1].classList.add("slideInLeft")// просто стили, слайды "выплывают", не влияет на js*/
        });
    } catch (e) { }

    let activAutoslider = () => {
        if (obj.dir === "vertical") {
      /*?*/ pausesetInterval = setInterval(() => {
            // присваение setInterval в pausesetInterval не влиет на выполние setInterval. Это просто пометка setInterval отдельным индификатором, что бы потом обратиться к именно к нему?
            nextSlide(1);
            all_Slides[indexOfShowSlide - 1].classList.add("slideInDown");
        }, 3000);
        } else {
            pausesetInterval = setInterval(() => {
                nextSlide(1);
                /*all_Slides[indexOfShowSlide - 1].classList.remove("slideInRightt");
                all_Slides[indexOfShowSlide - 1].classList.add("slideInLeft");*/ // стили не влияют на js, слайды "выплывают"
            }, 3000);
        }
    }
    activAutoslider();
    all_Slides[0].parentNode.addEventListener("mouseenter", () => {
        clearInterval(pausesetInterval);
    });
    all_Slides[0].parentNode.addEventListener("mouseleave", () => {
        activAutoslider();
    });
};
export default sliders;
