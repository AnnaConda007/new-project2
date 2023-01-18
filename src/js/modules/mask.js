const mask = (selector) => {
    let setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {
            // если браузер поодерживает setSelectionRange
            elem.setSelectionRange(pos, pos); // ставим курсор в нужное место
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true); // объеденяем диапозон
            range.moveEnd("character", pos); // конечная точка
            range.moveStart("character", pos); // начальная точка
            range.select(); // выделяем выбранный диапозон, то есть ставим курсор
        }
    };

    function createMask(event) {
        let sample = `+7 (___) ___ __ __`;
        let i = 0; // при каждом запуске функции, то есть при введении нового знака, переменная снова =0
        let defaultValue = sample.replace(/\D/g, ""); // изначальное значение до ввода  всех данных - все кроме цифр =, как только введен символ, он сохраняется в value
        let value = this.value.replace(/\D/g, ""); // уже введенные данные,обновляется при каждом запуске функций, все кроме цифр равно пустой строке

        if (defaultValue.length >= value.length) {
            //??зачем это нужно 
            // я поняла эту часть так - если длина первоначального значения больше нового введенного значения, то в input остается
            // первоначальное значение, то есть, например, в input уже введено +7 85_ ___ __ __ , вводим "5". defaultValue = +7 85_ ___ __ __ 
            //value = 5.  defaultValue.length >= value.length. Теперь value = +7 85_ ___ __ __, но нывый символ "5", тогда не вносится
            value = defaultValue;
        }
        562;
        this.value = sample.replace(/./g, function (a) {
            //проверяется каждый знак в value
            return /[_\d]/.test(a) && i < value.length
                ? value.charAt(i++)
                : i >= value.length
                    ? ""
                    : a;
        }); /*  "а" проверятеся на соответсвтие рег выражению - [только _ и цифры]
        и если i меньше кооличества введенных символов, то возвращается из строки(уже введенных цифр) символ с индексом i++ , но i всегда =0 (19 строка)  =>(value.charAt(i++)),
        если нет, то просиходит еще одна проверка, на то что i >=колличества введенных символов, если проверка прошла успешно, то возвращается введенное число, если нет, то ""
        */
        if (event.type === "blur") {
            // если убрали мышь
            if (this.value.length == 2) {
        // если введен 1 знак(то есть символ с индексом 2), предпологается, что +7 имеют индекс 0;1
        /*? */ this.value = ""; // то очищаем поле (почему сохранятся +7  ?)
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }
    let input = document.querySelectorAll(selector);
    input.forEach((input) => {
        input.addEventListener("input", createMask); // функция запускается при любом изменени в input
        input.addEventListener("focus", createMask); // и при каждом наведении(клике)
        input.addEventListener("blur", createMask); // при клике вне формы
    });
};

export default mask;