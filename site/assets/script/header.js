const side_menu = document.querySelector('.side');
const menu_button = document.querySelector('.menu');
const header = document.querySelector('header');

menu_button.addEventListener('click', () => {
    if (side_menu.style.transform == 'translateX(-100%)') {
        side_menu.style.transform = 'translateX(0)';
        header.style.zIndex = '3';

    } else {
        side_menu.style.transform = 'translateX(-100%)';
        setTimeout(function() {header.style.zIndex = '0';}, 300);
    }
});