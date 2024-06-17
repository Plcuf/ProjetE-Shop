const Model = require('../models/products');
const request = require('request');

let previous = '';

exports.ErrorPage = async (req, res) => {
    try{
        res.render('error');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}

exports.Index = async (req, res) => {
    try {
        let listProducts = await Model.getProducts();
        for(let i=0; i < listProducts.length;i++){
            listProducts[i].images = await Model.getImages(listProducts[i].id);;
            console.log(listProducts[i].images[0].path);
        }

        listProducts.sort((a, b) => b.Promo - a.Promo);
        listProducts.reverse();
        console.log(listProducts);
        previous = 'index';
        res.render('index', {listProducts});
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

exports.Product = async (req, res) => {
    let productId = req.params.id;
    try {

        let produit = await Model.getProduct(productId);
        produit.images = await Model.getImages(produit.id);

        let recommendations = await Model.getRecommend();
        previous = `product/${productId}`;
        res.render('item', {produit, recommendations});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.Cart = async (req, res) => {
    try {
        let listProducts = await Model.getProducts();
        for (let i = 0; i < listProducts.length; i++) {
            listProducts[i].images = await Model.getImages(listProducts[i].id);
        }
        previous = 'cart';
        res.render('cart', {listProducts, previous});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.Favorites = async (req, res) => {
    try {
        let listProducts = await Model.getProducts();
        for (let i = 0; i < listProducts.length; i++) {
            listProducts[i].images = await Model.getImages(listProducts[i].id);
        }
        previous = 'fav';
        res.render('likes', {listProducts});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.Pay = async (req, res) => {
    if (previous == 'cart' || previous == 'handler') {
        try {
            let price = req.params.price;
            previous = 'pay';
            res.render('paiment', {price});
        } catch (error) {
            res.status(500);
        }
    } else {
        res.status(403);
    }
}

exports.PayHandle = async (req, res) => {
    if (previous == 'pay'){
        const api_token = '63d6706e-13c0-4aa7-9726-931aa32ccb69';
        try {
            let price = req.param('price');
            let cvc = req.param('cvc');
            let card_nb = req.param('nb');
            let date = req.param('date');
            previous = 'handler';
            console.log(price);
            console.log(cvc);
            console.log(card_nb);
            console.log(date);
            if(cvc.length != 3 || date.length != 5 || card_nb.length != 16) {
                res.redirect(`/payment/${price}/card`);
            }
            const bodyData = {
                card: {
                    number: card_nb,
                    expiration_date: date,
                    cvc: cvc
                },
                payment_intent: {
                    price: price
                },
            };

            const result = await fetch(`https://challenge-js.ynovaix.com/payment`, {
                method: "POST",
                headers: {
                    Authorization: api_token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData)
            });

            if (!result.ok) {
                res.redirect(`/payment/${price}/refused`);
            }
            let code_postal = req.param('postal');
            let ville = req.param('ville');
            let adresse = req.param('adresse');
            let num = req.param('num');

            let query = `${num}+${adresse}+${code_postal}+${ville}`;
            let real_adress = `${num} ${adresse} ${code_postal} ${ville}`

            console.log(code_postal);
            console.log(ville);
            console.log(adresse);
            console.log(num);
            console.log(query);
            console.log(real_adress);

            request(`/https://api-adresse.data.gouv.fr/search/?q=${query}`, (error, response, body) => {
                if (error) {
                    console.log(error);
                    res.status(500);
                }
                
                if(!response.ok) {
                    res.redirect(`/payment/${price}/adress`);
                } else {
                    res.redirect('/cart');
                }
            })

        } catch (err) {
            console.log(err);
            res.status(500);
        }
    } else {
        res.status(403);
    }
}