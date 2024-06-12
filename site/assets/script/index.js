const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');

const croissant = document.querySelector('#croissant');
const decroissant = document.querySelector('#decroissant');

const liste_croissante = []
const liste_decroissante = []

item.forEach(item => {
    if (liste_croissante.length === 0) {
        liste_croissante.push(item);
        liste_decroissante.push(item);
    } else {
        let i = 0;
        while (i < liste_croissante.length && item.querySelector('.prix').textContent > liste_croissante[i].querySelector('.prix').textContent) {
            i++;
        }
        liste_croissante.splice(i, 0, item);

        i = 0;
        
        while (i < liste_decroissante.length && item.querySelector('.prix').textContent < liste_decroissante[i].querySelector('.prix').textContent) {
            i++;
        }
        liste_decroissante.splice(i, 0, item);
    }
});

croissant.addEventListener('click', () => {
    items.innerHTML = '';
    liste_croissante.forEach(item => {
        items.appendChild(item);
    });
});

decroissant.addEventListener('click', () => {
    items.innerHTML = '';
    liste_decroissante.forEach(item => {
        items.appendChild(item);
    });
});