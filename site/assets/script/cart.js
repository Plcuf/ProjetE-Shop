document.addEventListener("DOMContentLoaded", async () => {
    let cart = await localStorage.getItem("cart");
    const buy_button = document.querySelector(".buy>a");
    const cart_content = document.querySelector(".cart-items");
    if (!cart || cart.length == 0) {
        localStorage.setItem('cart', '[]');
        buy_button.setAttribute('href', '#');
        buy_button.class += 'inactive';
        cart_content.innerHTML = "<p class='vide'> Votre panier est vide. </p>";
    } else {
        cart = JSON.parse(cart);
        const items = document.querySelectorAll('.item');
        let allProducts = JSON.parse(cart_content.getAttribute('data'));
        for (let i = 0; i < allProducts.length; i++) {
            let isInCart = false;
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id == allProducts[i].id){
                    isInCart = true;
                }
            }
            if (!isInCart){
                items[i].style.display = 'none';
            }
        }
    }
})


const items_infos = document.querySelectorAll('.item-infos');

items_infos.forEach(item_info => {
    const minus = item_info.children[1].children[0].children[0];
    const plus = item_info.children[1].children[0].children[2];
    const quantity = item_info.children[1].children[0].children[1];
    
    const remove = item_info.children[1].children[1].children[0];

    const reduction = item_info.children[0].children[1].children[0];
    const price = item_info.children[0].children[1].children[1];

    minus.addEventListener('click', function() {
        if (parseInt(quantity.textContent) > 1) {
            item_no_reduction_price = parseInt(reduction.textContent) / parseInt(quantity.textContent);
            item_price = parseInt(price.textContent) / parseInt(quantity.textContent);
            quantity.textContent = parseInt(quantity.textContent) - 1;
            price.textContent = (parseInt(price.textContent) - item_price) + "€";
            reduction.textContent = (parseInt(reduction.textContent) - item_no_reduction_price) + "€";
            updateCart();
            updateTotal();
        }
    });

    plus.addEventListener('click', function() {
        item_no_reduction_price = parseInt(reduction.textContent) / parseInt(quantity.textContent);
        item_price = parseInt(price.textContent) / parseInt(quantity.textContent);
        quantity.textContent = parseInt(quantity.textContent) + 1;
        price.textContent = (parseInt(price.textContent) + item_price) + "€";
        reduction.textContent = (parseInt(reduction.textContent) + item_no_reduction_price) + "€";
        updateCart();
        updateTotal();
    });

    remove.addEventListener('click', () => {
        const cart = JSON.parse(localStorage.getItem('cart'));

    })
});

function updateTotal() {
    const total = document.querySelector('.total');
    const prices = document.querySelectorAll('.price>p:nth-child(2)');

    let total_price = 0;
    prices.forEach(price => {
        total_price += parseInt(price.textContent);
    });
    total.textContent = total_price + "€";
    total.setAttribute('value', total_price);
}

function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const items = document.querySelectorAll('.item');

    for (let i = 0; i < cart.length; i++) {
        let quantity = items[i].querySelector('.item-infos>.button-line>.quantity>p').textContent;
        cart[i].quantity = quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function isFav(id) {
    const fav = JSON.parse(localStorage.getItem('fav'));
    let isFav = false;

    fav.forEach(item => {
        if (item == id) {
            isFav = true;
        }
    });

    if (isFav) {
        return true;
    }
    return false;
}



updateTotal();