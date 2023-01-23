const btn = document.querySelector('button')
const pictire = document.querySelector('.picture')
btn.addEventListener('click', () => {

    if (!pictire.classList.contains('active')) {
        pictire.classList.add('active')
        pictire.style.display = 'block'
    } else {
        pictire.style.display = 'none'
        pictire.classList.remove('active')
    }
})
