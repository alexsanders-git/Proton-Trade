// Burger menu

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

const openMenu = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('no-scroll');
}

burger.addEventListener('click', openMenu);

const closeMenu = () => {
    menu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('no-scroll');
}

const menuItem = document.querySelectorAll('.header__menu_link');

menuItem.forEach(el => el.addEventListener('click', closeMenu));


// Textarea counter

const textarea = document.querySelector('.contacts__textarea');
const textareaLabel = document.querySelector('.textarea__label');


textarea.addEventListener('keyup', () => {
    textareaLabel.innerHTML= textarea.value.length;
});


