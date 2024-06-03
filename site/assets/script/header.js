const side_menu = document.querySelector('.side');
const menu_button = document.querySelector('.menu');

menu_button.addEventListener('click', () => {
    if (side_menu.style.transform == 'translateX(-100%)') {
        side_menu.style.transform = 'translateX(0)';
    } else {
        side_menu.style.transform = 'translateX(-100%)';
    }
});