/*
1. Первый вызов showSlides
 Сначала вызывается функция showSlides с аргументом, в котором указывается переменная с номером нужного слайда проходит проверка: если 
значение переменной больше чем колличество слайдов, переменной присваеивается новое значение - "1", если меньше чем колличесто слайдов, 
переменной присваивается значение равное allSlides.length(колличество всех слайдов).  
 Далее скрываются все слайды. И после слайду с индексом равным (значение переданной переменной-1) устанавливается display="block"
 2.Вызов функции nextSlide
  Потом при каждом нажатии кнопок next/prew вызывается функция nextSlide, она увеличивает индекс на 1/-1, и внутри себя каждый раз
снова вызывает функцию showSlides с обновленным индексом. 
И теперь при каждом нажатии на кнопку след/пред переменная с номером слайда увеличивается/уменьшается на 1. Новое значение проходит 
проверку и нужному блоку устанавливается display="block" 
3. Вызывается функция  activAutoslider() - автоматический слайдер
В функции activAutoslider проверяется какое направление передалось при вызове функции. И внутри этой функции вызывается setInterval, который 
постоянно вызывевает функцию nextSlide.  setInterval изначально задается индификатор pausesetInterval. 
4.при наведении мыши слайдер останавливается: обращаемся к родителю allSlides, и ему задается соответсвующий обработчик событий
Когда пользователь новодит мышку на слайдер просиходит clearInterval(pausesetInterval). Когда убирает - снова вызывается activAutoslider()
 */
////////
const sliders = ({ slideItems, dir, prevButton, nextButton }) => {
    let indexOfShowSlide = 1;
    let pausesetInterval;
    const allSlides = document.querySelectorAll(slideItems);

    const showSlides = (numOfshowingSlide) => {
        if (numOfshowingSlide > allSlides.length) {
            indexOfShowSlide = 1;
        }
        if (numOfshowingSlide < 1) {
            indexOfShowSlide = allSlides.length; //length возвращает КОЛЛИЧЕСТВО элементов в массиве, а не индекс последнего элемента
        }
        allSlides.forEach((slide) => {
            slide.classList.add("animated"); // стиль, не влияющий на работу js
            slide.style.display = "none ";
        });
        allSlides[indexOfShowSlide - 1].style.display = "block"; // "-1" потому что индекс в allSlides считается с 0
    }
    showSlides(indexOfShowSlide);

    const nextSlide = (UnitOfСhange) => {
        indexOfShowSlide += UnitOfСhange;
        showSlides(indexOfShowSlide);
    }
    try {
        // try нужно что бы не возникало ошибки, если при вызове функции в main будут переданы не все параметры. Так как для вызова функци в таймере не нужны кнопки вызова след слайда
        const prevBtn = document.querySelector(prevButton);
        const nextBtn = document.querySelector(nextButton);

        prevBtn.addEventListener("click", () => {
            nextSlide(-1);
            /*  allSlides[indexOfShowSlide - 1].classList.remove("slideInLeft")// просто стили, слайды "выплывают", не влияет на js*/
            /* allSlides[indexOfShowSlide - 1].classList.add("slideInRight") // просто стили, слайды "выплывают", не влияет на js*/
        });

        nextBtn.addEventListener("click", () => {
            nextSlide(1);
            /*allSlides[indexOfShowSlide - 1].classList.remove("slideInRightt")// просто стили, слайды "выплывают", не влияет на js*/
            /*  allSlides[indexOfShowSlide - 1].classList.add("slideInLeft")// просто стили, слайды "выплывают", не влияет на js*/
        });
    } catch (e) { }

    const activAutoslider = () => {
        if (dir === "vertical") {
      /*?*/ pausesetInterval = setInterval(() => {
            // присваение setInterval в pausesetInterval не влиет на выполние setInterval. Это просто пометка setInterval отдельным индификатором, что бы потом обратиться к именно к нему?
            nextSlide(1);
            allSlides[indexOfShowSlide - 1].classList.add("slideInDown");
        }, 3000);
        } else {
            pausesetInterval = setInterval(() => {
                nextSlide(1);
                /*allSlides[indexOfShowSlide - 1].classList.remove("slideInRightt");
                allSlides[indexOfShowSlide - 1].classList.add("slideInLeft");*/ // стили не влияют на js, слайды "выплывают"
            }, 3000);
        }
    }
    activAutoslider();
    allSlides[0].parentNode.addEventListener("mouseenter", () => {
        clearInterval(pausesetInterval);
    });
    allSlides[0].parentNode.addEventListener("mouseleave", () => {
        activAutoslider();
    });
};
export default sliders;
