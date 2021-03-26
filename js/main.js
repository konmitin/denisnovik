// Изменяю картинку header__image при разрешении 320px
let windowWidth = screen.availWidth;
let newImage = document.querySelector('#img-x');

changeImage()

function changeImage() {

    let windowWidth = screen.availWidth;

    if (windowWidth <= 658) {
        newImage.src = 'img/header-mobile.png';

    }
}

// Создаю меню бургер

let menuBurger = document.querySelector('#menuBurger');
let headerNav = document.querySelector('#headerNav');
let body = document.querySelector('body');

menuBurger.addEventListener('click', () => {

    menuBurger.classList.toggle('active');
    headerNav.classList.toggle('active');

    // Отключил прокрутку страницы
    body.classList.toggle('disable-scroll');
});