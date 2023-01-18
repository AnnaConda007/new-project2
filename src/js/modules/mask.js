
const mask = (selector) => {
    function createMask(event) {
        let sample = `+7 (___) ___ __ __`;
        let i = 0;
        let emptyInput = sample.replace(/\D/g, ""); //значение этой переменной никогда не меняется. В консоли она всегда равна +7
        let value = this.value.replace(/\D/g, "");// this берет данные из input,и сохраняет в себя только цифры. При каждом новом запуске функций, переменная обращается к input  в браузере

        if (emptyInput.length >= value.length) {// emptyInput всегда равен 7. emptyInput.length>=value.length только тогда когда пользователь еще не введ никаких символов. 
            value = emptyInput;// поэтому value[0] принимает значение 7. 

        }

        this.value = sample.replace(/./g, function (a) {//результат проверки возвращается непосредственно в input, а не в переменную 
            if (/[_\d]/.test(a) && i < value.length) {//" [_\d]" указывает, что нужно найти "_" и заменить на то, что является цифрой.
                //==>test(a) проверяет, является ли а цифрой. Если да, то возвращает true. ==>   ?i < value.length?
                console.log("if i < value.length, то i =" + i)
                return value.charAt(i++)// если условие выполнено, то "а"  возвращается  в в input  на место равное i++
            } else {
                console.log("i >= value.length, то i =" + i)
                console.log("________ ")
                if (i >= value.length) { return "" } else { return a }

            }
        }
        );

    }
    let input = document.querySelectorAll(selector);
    input.forEach((input) => {
        input.addEventListener("input", createMask);
        input.addEventListener("focus", createMask);

    });
};

export default mask;

/*
const mask = (selector) => {
    let setCursorPosition = (pos, elem) => {
        elem.focus();
        if (elem.setSelectionRange) {

            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    };

    function createMask(event) {
        let sample = `+7 (___) ___ __ __`;
        let i = 0;
        let emptyInput = sample.replace(/\D/g, "");
        let value = this.value.replace(/\D/g, "");

        if (emptyInput.length >= value.length) {
            console.log("emptyInput: " + emptyInput)
            console.log("value до : " + value)
            value = emptyInput;
            console.log("value после : " + value)
        }

        this.value = sample.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < value.length
                ? value.charAt(i++)
                : i >= value.length
                    ? ""
                    : a;
        });
        if (event.type === "blur") {

            if (this.value.length == 2) {
                this.value = "";
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }
    let input = document.querySelectorAll(selector);
    input.forEach((input) => {
        input.addEventListener("input", createMask);
        input.addEventListener("focus", createMask);
        input.addEventListener("blur", createMask);
    });
};

export default mask;
*/