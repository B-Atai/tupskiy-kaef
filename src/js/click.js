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
    let dropdownBtn = document.querySelector('.dropdownbtn')
    let dropdownItem = document.querySelector('.dropdownitem')
    dropdownBtn.addEventListener('click', () => {
        console.log(dropdownItem)
        dropdownItem.classList.toggle('is-active')
    })

    const dropdownbtn__layout = document.querySelector('.dropdownbtn__layout')
    const dropdownitem__layout = document.querySelector('.dropdownitem__layout')
    dropdownbtn__layout.addEventListener('click', () => {
        dropdownitem__layout.classList.toggle('is-active')
    })
}
dropdown();

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