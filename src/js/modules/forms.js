//import checkNumInputs from "./checkNumInputs"
//checkNumInputs(`input[name="user_phone"]`)

// !! ??  при отправки формы дизайнеру после выполения pjstData остается пустое окно popup-content. При отпрвки формы консультанту, окно заполнено предложением оставить заявку на звонок 
// ?! не срабатывает  alert("ERROR!") //

const forms = () => {
    const allForms = document.querySelectorAll('form')
    const allInputs = document.querySelectorAll('input')

    const message = {
        loading: 'Загрузка....',
        success: 'Спасибо, мы с вами свяжемся',
        failure: 'Что-то пошло не так..',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    }

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php',
    }

    const postData = async (url, data) => {
        const resultFetch = await fetch(url, {
            method: 'POST',
            body: data,
        })
        return await resultFetch.text()
    }
    const clearAllInputs = () => {
        allInputs.forEach((input) => {
            input.value = "";
        });
    };


    allForms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const statusMessageDiv = document.createElement('div')
            statusMessageDiv.classList.add('status')
            form.parentNode.appendChild(statusMessageDiv)

            form.classList.add('animated', "fadeOutUp")
            setTimeout(() => {
                form.style.display = 'none'
            }, 400)

            let statusImg = document.createElement('img')
            statusImg.setAttribute('src', message.spinner)
            statusImg.classList.add('animated', 'fadeInUp')
            statusMessageDiv.appendChild(statusImg)

            let textMessage = document.createElement('div')
            textMessage.textContent = message.loading
            statusMessageDiv.appendChild(textMessage)

            const formData = new FormData(form)
            let api
            form.closest('.popup-design')
                ? (api = path.designer)
                : (api = path.question)
            console.log(api)

            postData("assets/server.php", formData)
                .then((resultFetch) => {
                    console.log(resultFetch)
                    statusImg.setAttribute('src', message.ok)
                    textMessage.textContent = message.success
                })
                .catch(() => {
/*?*/            alert("ERROR!") //? срабатывает только при открытой консоли
                    statusImg.setAttribute('src', message.fail)
                    textMessage.textContent = message.failure
                })
                .finally(() => {
                    clearAllInputs()
                    setTimeout(() => {
                        statusMessageDiv.remove()
                        form.style.display = "block"
                        form.classList.remove("fadeOutUp")
                        form.classList.add("fadeInUp")
                    }, 5000)

                })
        })
    })
}

export default forms
