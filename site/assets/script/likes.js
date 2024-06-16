document.addEventListener('DOMContentLoaded', () => {
    const fav = JSON.parse(localStorage.getItem('fav'));
    const fav_content = document.querySelector(".cart-items");
    if (!fav || fav.length == 0) {
        fav_content.innerHTML = "<p class='vide'> Votre liste est vide. </p>";
    } else {
        fav = JSON.parse(fav);
        const items = document.querySelectorAll('.item');
        let allProducts = JSON.parse(cart_content.getAttribute('data'));
        for (let i = 0; i < allProducts.length; i++) {
            let isInFav = false;
            for (let j = 0; j < fav.length; j++) {
                if (fav[j].id == allProducts[i].id){
                    isInFav = true;
                }
            }
            if (!isInFav){
                items[i].style.display = 'none';
            }
        }
    }
})