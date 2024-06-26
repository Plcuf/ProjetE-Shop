const submit = document.querySelector('.submit');

const price = parseFloat(document.querySelector('.price').children[1].textContent);
const adress = document.getElementById('adress');
const container = document.querySelector('.autocontainer');


adress.addEventListener('input', async () => {
    let content = adress.value;
    content = content.replaceAll(' ', '+');
    if (content.length >= 3) {
        var resultats;
        
        container.innerHTML = '';
        
        await getAddresses(content)
        .then( async data => {
            resultats = data;
        })        
        resultats.forEach(feature => {
            container.innerHTML += `
            <div class="autocomplete">
            <p class="autoadresse"> ${feature.properties.label} </p>
            </div>
            `
        });
        const possible = document.querySelectorAll('.autocomplete');
        
        possible.forEach(adresse => {
            adresse.addEventListener('click', () => {
                adress.value = adresse.textContent;
                container.style.display = 'none';
            })
        });
    }
});

async function getAddresses(content){
    const results = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${content}&limit=3`);
    const data = await results.json();
    return data.features;
}

submit.addEventListener('click', async () => {
    const cvc = document.getElementById('cvc').value;
    const nb = document.getElementById('card-number').value;
    const date = document.getElementById('expiration').value;
    window.location.href = `/paymentHandle/${cvc}/${nb}/${date}`;
});