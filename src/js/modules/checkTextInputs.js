const checkTextInputs = (selector) => {
    const txtInput = document.querySelectorAll(selector)

    txtInput.forEach(input => {
        input.addEventListener(`keypress`, function (e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {// каждое нажатие клавищи сравнивается с русским алфавитом и цифрами
                e.preventDefault()// прерывается обновление страницы. Но зачем, ведь по умолчанию при нажатии клавиши не просиходит обновления?
            }
        })
    })
}


export default checkTextInputs