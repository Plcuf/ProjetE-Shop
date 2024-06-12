document.addEventListener("DOMContentLoaded", () => {
    let cart = localStorage.getItem("cart");
    if (!cart)
})


const items_infos = document.querySelectorAll('.item-infos');

items_infos.forEach(item_info => {
    const minus = item_info.children[1].children[0].children[0]
    const plus = item_info.children[1].children[0].children[2]
    const quantity = item_info.children[1].children[0].children[1]

    const reduction = item_info.children[0].children[1].children[0]
    const price = item_info.children[0].children[1].children[1]

    minus.addEventListener('click', function() {
        if (parseInt(quantity.textContent) > 1) {
            item_no_reduction_price = parseInt(reduction.textContent) / parseInt(quantity.textContent);
            item_price = parseInt(price.textContent) / parseInt(quantity.textContent);
            quantity.textContent = parseInt(quantity.textContent) - 1;
            price.textContent = (parseInt(price.textContent) - item_price) + "€";
            reduction.textContent = (parseInt(reduction.textContent) - item_no_reduction_price) + "€";

            updateTotal();
        }
    });

    plus.addEventListener('click', function() {
        item_no_reduction_price = parseInt(reduction.textContent) / parseInt(quantity.textContent);
        item_price = parseInt(price.textContent) / parseInt(quantity.textContent);
        quantity.textContent = parseInt(quantity.textContent) + 1;
        price.textContent = (parseInt(price.textContent) + item_price) + "€";
        reduction.textContent = (parseInt(reduction.textContent) + item_no_reduction_price) + "€";

        updateTotal();
    });
});

function updateTotal() {
    console.log('pqidjf');
    const total = document.querySelector('.total');
    const prices = document.querySelectorAll('.price>p:nth-child(2)');

    let total_price = 0;
    prices.forEach(price => {
        total_price += parseInt(price.textContent);
    });
    total.textContent = total_price + "€";
}

updateTotal();