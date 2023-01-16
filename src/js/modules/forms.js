//import checkNumInputs from "./checkNumInputs"
//checkNumInputs(`input[name="user_phone"]`)

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



            const data = {}
            formData.forEach((value, key) => (data[key] = value))
            console.log("data: ", JSON.stringify(data))

            const success = () => {
                console.log("success!")
                statusImg.setAttribute('src', message.ok)
                textMessage.textContent = message.success
            }

            const error = () => {
                console.log("error!")
                statusImg.setAttribute('src', message.fail)
                textMessage.textContent = message.failure
            }

            const variants = [error, success]
            variants[Math.floor(Math.random() * variants.length)]()

            clearAllInputs()

            setTimeout(() => {
                statusMessageDiv.remove()
                form.style.display = "block"
                form.classList.remove("fadeOutUp")
                form.classList.add("fadeInUp")
            }, 5000)

        })
    })
}

export default forms
