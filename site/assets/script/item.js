const plus = document.querySelector('.plus');
const desc = document.querySelector('.desc>p:nth-child(1)');


let full_desc = desc.textContent;
let short_desc = full_desc.slice(0, 250) + '...';

document.addEventListener('DOMContentLoaded', () => {
    desc.textContent = short_desc;
})

const add_to_cart = document.querySelector('.panier');
const add_to_fav = document.querySelector('.favoris');
const item = JSON.parse(document.querySelector('.item').getAttribute('data'));

add_to_fav.addEventListener('click', () => {
    const favorites = JSON.parse(localStorage.getItem('fav'));
        let isFav = false;
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i] == item.id) {
                favorites.splice(i, 1);
                isFav = true;
            }
        }

        if (!isFav) {
            favorites.push(item.id);
        }

        localStorage.setItem('fav', JSON.stringify(favorites));
})

add_to_cart.addEventListener('click', () => {
    let cart = localStorage.getItem('cart');
    console.log(cart);
    let actualCart;
    let actualItem = document.querySelector('.specs').id;
    
    if (!cart) {
        actualCart = [{id: actualItem, quantity: 1}];
        localStorage.setItem('cart', JSON.stringify(actualCart));
    } else {
        actualCart = JSON.parse(cart);
        let inCart = false;
        for (let i = 0; i < actualCart.length; i++) {
            if (actualCart[i].id == actualItem) {
                actualCart[i].quantity++;
                inCart = true;
            }
        }
        if (!inCart) {
            let new_item = {
                id: actualItem,
                quantity: 1
            };
            actualCart.push(new_item);
        }
        localStorage.setItem('cart', JSON.stringify(actualCart));
    }
    window.location.href = '/cart';
})

plus.addEventListener('click', function() {
    if (desc.textContent === short_desc) {
        desc.textContent = full_desc;
        plus.textContent = 'Voir moins';
    } else {
        desc.textContent = short_desc;
        plus.textContent = 'Voir plus';
    }
});

const left = document.querySelector('.left-arrow');
const right = document.querySelector('.right-arrow');

const image1 = document.querySelector('.previews>img:nth-child(1)');
const image2 = document.querySelector('.previews>img:nth-child(2)');
const image3 = document.querySelector('.previews>img:nth-child(3)');

const mainImage = document.querySelector('.carousel>img');

left.addEventListener('click', function() {
    if (mainImage.src === image1.src) {
        mainImage.src = image3.src;
    } else if (mainImage.src === image2.src) {
        mainImage.src = image1.src;
    } else {
        mainImage.src = image2.src;
    }
});

right.addEventListener('click', function() {
    if (mainImage.src === image1.src) {
        mainImage.src = image2.src;
    } else if (mainImage.src === image2.src) {
        mainImage.src = image3.src;
    } else {
        mainImage.src = image1.src;
    }
});

image1.addEventListener('click', function() {
    mainImage.src = image1.src;
});

image2.addEventListener('click', function() {
    mainImage.src = image2.src;
});

image3.addEventListener('click', function() {
    mainImage.src = image3.src;
});