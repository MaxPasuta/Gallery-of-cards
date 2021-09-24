const slides = document.querySelectorAll('.slide')


for(const slide of slides){
    slide.addEventListener('click', () => {
        clearAcriveClass()
        slide.classList.add('active')
    })
}


function clearAcriveClass(){
    slides.forEach((slide)=> {
        slide.classList.remove('active')
    })
}