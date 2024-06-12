const side_menu = document.querySelector('.side');
const menu_button = document.querySelector('.menu');
const header = document.querySelector('header');

menu_button.addEventListener('click', () => {
    side_menu.classList.toggle('open');
});