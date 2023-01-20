const filter = () => {
    const menu = document.querySelector(".portfolio-menu")
    const menuItems = menu.querySelectorAll("li")
    const btnAll = menu.querySelector(".all")
    const btnLovers = menu.querySelector(".lovers")
    const btnChef = menu.querySelector(".chef")
    const btnGirl = menu.querySelector(".girl")
    const btnGuy = menu.querySelector(".guy")
    const btnGrandmother = menu.querySelector(".grandmother")
    const btnGranddad = menu.querySelector(".granddad")
    const wrapper = document.querySelector(".portfolio-wrapper")
    const allSample = wrapper.querySelectorAll(".all")
    const girlSample = wrapper.querySelectorAll(".girl")
    const loversSample = wrapper.querySelectorAll(".lovers")
    const chefSample = wrapper.querySelectorAll(".chef")
    const guySample = wrapper.querySelectorAll(".guy")
    const no = document.querySelector(".portfolio-no")

    const filterFunc = (nameOfSample) => {
        allSample.forEach(sample => { // скрываем каждый пример
            sample.style.display = "none"
            sample.classList.remove("animated", "fadeIn")
        })
        no.style.display = "none" // и дополнительно скрываем и так скрытый(по умолчанию) блок
        no.classList.remove("animated", "fadeIn")

      /*?*/  if (nameOfSample != undefined) { // показываем нужный блок
            nameOfSample.forEach(sampleName => {
                sampleName.style.display = "block"
                sampleName.classList.add("animated", "fadeIn")
            })
        } else {
            no.style.display = "block" // if  nameOfSample = undefined - то показываем блок "no"
            no.classList.add("animated", "fadeIn")
        }
    }

    btnAll.addEventListener("click", () => {
        filterFunc(allSample)
    })
    btnLovers.addEventListener("click", () => {
        filterFunc(loversSample)
    })
    btnChef.addEventListener("click", () => {
        filterFunc(chefSample)
    })
    btnGuy.addEventListener("click", () => {
        filterFunc(guySample)
    })
    btnGirl.addEventListener("click", () => {
        filterFunc(girlSample)
    })
    btnGrandmother.addEventListener("click", () => {
        filterFunc()
    })
    btnGranddad.addEventListener("click", () => {
        filterFunc()
    })

    menu.addEventListener("click", (e) => {
        const target = e.target
        if (target && target.tagName == "LI") {
            menuItems.forEach(item => item.classList.remove("active"))
            target.classList.add("active")
        }
    })

}

export default filter