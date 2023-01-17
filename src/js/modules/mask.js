const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus()
        if (elem.setSelectionRange) {// если браузер поодерживает setSelectionRange
            elem.setSelectionRange(pos, pos) // ставим курсор в нужное место
        } else if (elem.createTextRange) {
            let range = elem.createTextRange()

            range.collapse(true)// объеденяем диапозон
            range.moveEnd("character", pos) // конечная точка
            range.moveStart("character", pos)// начальная точка
            range.select();// выделяем выбранный диапозон
        }
    }

    function createMask(event) {
        let sample = `+7 (___) ___ __ __`
        let i = 0
        let defaultValue = sample.replace(/\D/g, "") // изначальное значение до ввода данных
        let value = this.value.replace(/\D/g, "") // введние данных

        if (defaultValue.length >= value.length) {//  если длина первоначального значения больше введенного значения, то в input остается первоначальное значение 
            value = defaultValue
        }

        this.value = sample.replace(/./g, function (a) {// каждый знак в value
            return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? "" : a
        })/*↑ 
        если каждый знак совпадает с числом или "_" и i меньше value.length, то return число с индексом i++, если  
        i больше value.length(введено последнее число), то возвращается это последнее число
        */
        if (event.type === "blur") { // если убрали мышь
            if (this.value.length == 2) {// если введен 1 знак(кроме +7)
  /*? */  this.value = "" // то очищаем поле (почему сохранятся +7  ?)
            }
        } else {
            setCursorPosition(this.value.length, this)
        }
    }
    let input = document.querySelectorAll(selector)
    input.forEach(input => {
        input.addEventListener("input", createMask) // функция запускается при любом изменени в input 
        input.addEventListener("focus", createMask) // и при каждом наведении(клике)
        input.addEventListener("blur", createMask) // при клике вне формы
    })

}

export default mask