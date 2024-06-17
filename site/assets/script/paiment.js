const submit = document.querySelector('.submit');

const price = parseFloat(document.querySelector('.price').children[1].textContent);
const cvc = document.getElementById('cvc').value;
const nb = document.getElementById('card-number').value;
const date = document.getElementById('expiration').value;
const postal = document.getElementById('postal').value;
const num = document.getElementById('house-number').value;
const ville = document.getElementById('city').value;
const adresse = document.getElementById('adress').value;

submit.addEventListener('click', () => {
    window.location.href = `/paymentHandle?price=${price}&cvc=${cvc}&nb=${nb}&date=${date}&code_postal=${postal}&ville=${ville}&num=${num}&adresse=${adresse}`;
});