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