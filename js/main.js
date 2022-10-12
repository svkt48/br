let mobileMenu = document.querySelector('.mobile-menu__wrapper')
let line1 = document.querySelector('.line-1')
let line2 = document.querySelector('.line-2')
let line3 = document.querySelector('.line-3')

let navList = document.querySelector('.nav-list')
let navItem1 = document.querySelector('.nav-item-1')
let navItem2 = document.querySelector('.nav-item-2')
let navItem3 = document.querySelector('.nav-item-3')
let navItem4 = document.querySelector('.nav-item-4')
let navItem5 = document.querySelector('.nav-item-5')
let navItem6 = document.querySelector('.nav-item-6')

function menuToggleFunction() {
    line1.classList.toggle('line-1--active')
    line2.classList.toggle('line-2--active')
    line3.classList.toggle('line-3--active')
    navList.classList.toggle('nav-list--active')
    navItem1.classList.toggle('nav-item-1--active')
    navItem2.classList.toggle('nav-item-2--active')
    navItem3.classList.toggle('nav-item-3--active')
    navItem4.classList.toggle('nav-item-4--active')
    navItem5.classList.toggle('nav-item-5--active')
}
mobileMenu.addEventListener('click', () => {
    menuToggleFunction()
})
let navItems = document.querySelectorAll('.nav-item')
navItems.forEach((item, id) => {
    item.addEventListener('click', () => {
        menuToggleFunction()
    })
})


let icon = document.querySelectorAll('.services-block__icon');
let servicesBlockBtn = document.querySelectorAll('.services-block__btn');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    icon.forEach((item, id) => {
        icon[id].style.display = 'none'
        servicesBlockBtn[id].style.display = 'block'
        servicesBlockBtn[id].style.opacity = 1
        servicesBlockBtn[id].style.visibility = 'visible'
    })
    
} else {
    icon.forEach((item, id) => {
        icon[id].style.display = 'block'
        servicesBlockBtn[id].style.display = 'block'
    })
}