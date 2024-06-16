const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');

const croissant = document.querySelector('#croissant');
const decroissant = document.querySelector('#decroissant');

const liste_croissante = Array.prototype.slice.call(item);
const liste_decroissante = Array.prototype.slice.call(item);

document.addEventListener("DOMContentLoaded", () => {
    const cart = localStorage.getItem('cart');
    const fav = localStorage.getItem('fav');
    if (!cart) {
        localStorage.setItem('cart', "[]");
    }
    if (!fav) {
        localStorage.setItem('fav', '[]');
    }
})

liste_croissante.sort((a, b) => parseFloat(a.querySelector('.infos>.price>.prix').textContent) - parseFloat(b.querySelector('.infos>.price>.prix').textContent));
liste_decroissante.sort((a, b) => parseFloat(b.querySelector('.infos>.price>.prix').textContent) - parseFloat(a.querySelector('.infos>.price>.prix').textContent));

croissant.addEventListener('click', () => {
    items.innerHTML = '';
    liste_croissante.forEach(item => {
        items.appendChild(item);
    })
});

decroissant.addEventListener('click', () => {
    items.innerHTML = '';
    liste_decroissante.forEach(item => {
        items.appendChild(item);
    });
});