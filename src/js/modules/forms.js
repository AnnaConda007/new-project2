//import checkNumInputs from "./checkNumInputs"
//checkNumInputs(`input[name="user_phone"]`)


const forms = () => {
    const allForms = document.querySelectorAll('form')
    const allInputs = document.querySelectorAll('input')
    const uploadImgInput = document.querySelectorAll('[name="upload"]')

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
            input.value = ''
        })
        uploadImgInput.forEach((input) => {
            input.previousElementSibling.textContent = 'Файл не выбран'
        })
    }

    uploadImgInput.forEach((inputName) => {
        inputName.addEventListener('input', () => {
            let dots
            const arr = inputName.files[0].name.split('.')
            arr[0].length > 6 ? (dots = '...') : (dots = '.')
            const name = arr[0].substring(0, 6) + dots + arr[1]
            inputName.previousElementSibling.textContent = name
        })
    })

    allForms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const statusMessageDiv = document.createElement('div')
            statusMessageDiv.classList.add('status')
            form.parentNode.appendChild(statusMessageDiv)

            form.classList.add('animated', 'fadeOutUp')
            setTimeout(() => {
                form.style.display = 'none'
            }, 400)

            const statusImg = document.createElement('img')
            statusImg.setAttribute('src', message.spinner)
            statusImg.classList.add('animated', 'fadeInUp')
            statusMessageDiv.appendChild(statusImg)

            const textMessage = document.createElement('div')
            textMessage.textContent = message.loading
            statusMessageDiv.appendChild(textMessage)

            const formData = new FormData(form)
            let api
            form.closest('.popup-design')
                ? (api = path.designer)
                : (api = path.question)

            postData(api, formData)
                .then((resultFetch) => {
                    statusImg.setAttribute('src', message.ok)
                    textMessage.textContent = message.success
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail)
                    textMessage.textContent = message.failure
                })
                .finally(() => {
                    clearAllInputs()
                    setTimeout(() => {
                        statusMessageDiv.remove()
                        form.style.display = 'block'
                        form.classList.remove('fadeOutUp')
                        form.classList.add('fadeInUp')
                    }, 5000)
                })
        })
    })
}

export default forms
