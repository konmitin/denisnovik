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
let navLink = document.querySelectorAll('.nav__link');

menuBurger.addEventListener('click', () => {

    // Показываю навигационное меню
    menuBurger.classList.toggle('active');
    headerNav.classList.toggle('active');

    // Отключил прокрутку страницы
    body.classList.toggle('disable-scroll');

    // "Навесил" навигационным ссылкам обработчик событий
    navLink.forEach(function(item, i, navLink) {

        item.addEventListener('click', function() {

            // Скрываю навигационное меню
            menuBurger.classList.remove('active');
            headerNav.classList.remove('active');

            // Включил прокрутку страницы
            body.classList.remove('disable-scroll');

        });

    });
});

// Плавная прокрутка по странице

navLink.forEach(function(item, i, navLink) {

    item.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);


        if (scrollTarget) {
            // const toppOffste = document.querySelector('.scrollto').offsetHeight;
            const toppOffste = 0; // Если не нужен отсуп сверху
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - toppOffste;

            window.scroll({
                top: offsetPosition,
                behavior: 'smooth',
            });
        } else {
            window.scroll({
                bottom: e.top,
                behavior: 'smooth',
            });
        }
    });

});