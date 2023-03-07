export default class Slider {
    constructor(page, btns) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slidIndex = 1
    }
    showSlides(n) {
       if(n>this.slides.length){
       this.slidIndex = 1
       }
  
       if(n<1){
        this.slidIndex = this.slides.length
       }
  
        this.slides.forEach(slide => {
            slide.style.display = "none"
        })
        this.slides[this.slidIndex - 1].style.display = "block" // за счет чего значение slidIndex меняется при переключении слайдов?
    }
  
  
    plusSlides(n) {
        this.showSlides(this.slidIndex += n)
    }
  
  
    render() {
        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.plusSlides(1)//? увеличивается индекс показываемого слайда и вызывает  showSlides 
            })
  
            btn.parentNode.previousElementSibling.addEventListener("click",(e)=>{
  e.preventDefault()
  this.slidIndex=1
  this.showSlides(this.slidIndex)//? клик на логотип и возвращение к первому слайду
            })
        })
        this.showSlides(this.slidIndex) //? повторно вызывает showSlides во время одного клика?
    }
  }