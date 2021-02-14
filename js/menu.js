var menuOpen = document.querySelector('.header__button-menu');
var menuClose = document.querySelector('.header__button-close');

var navList = document.querySelector('.header__nav');

menuOpen.addEventListener('click', function(evt) {
    evt.preventDefault();

    menuClose.classList.add('header__button-close_on');
    menuOpen.classList.remove('header__button-menu_on');
    navList.classList.add('header__nav_active');
})

menuClose.addEventListener('click', function(evt) {
    evt.preventDefault();

    menuClose.classList.remove('header__button-close_on');
    menuOpen.classList.add('header__button-menu_on');
    navList.classList.remove('header__nav_active');
})