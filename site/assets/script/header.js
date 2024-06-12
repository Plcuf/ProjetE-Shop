const side_menu = document.querySelector('.side');
const menu_button = document.querySelector('.menu');
const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const cart = document.getElementById('cart');
const favorites = document.getElementById('favorites');

menu_button.addEventListener('click', () => {
    side_menu.classList.toggle('open');
});

logo.addEventListener('click', () => {
    window.location.href = '/accueil';
})

cart.addEventListener('click', () => {
    window.location.href = '/cart';
})

favorites.addEventListener('click', () => {
    window.location.href = '/favorites';
})