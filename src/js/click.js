function active() {
    const btnP = document.getElementById('btn__photo');
    const photo = document.querySelector('.gallery__photo');
    const btnV = document.getElementById('btn__video');
    const video = document.querySelector('.gallery__video');
    btnP.addEventListener('click', () => {
        video.classList.remove('is-active')
        photo.style.display='block'
    })
    btnV.addEventListener('click', () => {
        photo.style.display='none'
        video.classList.add('is-active');
    })
}
active();

function burger(){
    const burgerBtn = document.querySelector('.burger__icon');
    const burgerItem = document.querySelector('.burger');
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('is-active');
        burgerItem.classList.toggle('is-active');
    })
}
burger();

function dropdown() {
    const dropdownBtn =document.querySelector('.lang__main')
    const dropdownItem = document.querySelector('.lang__content')
    dropdownBtn.addEventListener('click', () =>{
        dropdownItem.classList.toggle('is-active')
    })
}
dropdown()