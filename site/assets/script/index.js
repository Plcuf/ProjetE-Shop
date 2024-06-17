const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');

const croissant = document.querySelector('#croissant');
const decroissant = document.querySelector('#decroissant');

const liste_croissante = Array.prototype.slice.call(item);
const liste_decroissante = Array.prototype.slice.call(item);

liste_croissante.sort((a, b) => parseFloat(a.querySelector('.infos>.price>.prix').textContent) - parseFloat(b.querySelector('.infos>.price>.prix').textContent))
liste_decroissante.sort((a, b) => parseFloat(b.querySelector('.infos>.price>.prix').textContent) - parseFloat(a.querySelector('.infos>.price>.prix').textContent))

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

const all_items = document.querySelectorAll('.item');
const all_franchises = document.querySelectorAll('.franchises')
const all_type = document.querySelectorAll('.type')

const current_items = all_items;
const current_franchise = "all";
const current_type = "all";

const display = document.querySelector('.items')

function filter() {
    if (current_franchise == "all" && current_type == "all") {
        display.innerHTML = '';
        current_items.forEach(item => {
            display.appendChild(item);
        });
    }
    else {
        display.innerHTML = '';
        current_items.forEach(item => {
            if (current_franchise == "all") {
                if (item.dataset.type == current_type) {
                    display.appendChild(item);
                }
            }
            else if (current_type == "all") {
                if (item.dataset.franchise == current_franchise) {
                    display.appendChild(item);
                }
            }
            else {
                if (item.dataset.franchise == current_franchise && item.dataset.type == current_type) {
                    display.appendChild(item);
                }
            }
        });
    }

}

all_franchises.forEach(franchise => {
    franchise.addEventListener('click', () => {
        current_franchise = franchise.textContent;
        filter();
    })
});

all_type.forEach(type => {
    type.addEventListener('click', () => {
        current_type = type.textContent;
        filter();
    })
});