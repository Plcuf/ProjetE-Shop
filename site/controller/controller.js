const Model = require('../models/products');

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
        res.render('cart', {listProducts});
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
    if (previous == 'cart') {
        try {
            let price = req.params.price;
            previous = 'pay';
            res.render('pay', {price});
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
                body: JSON.stringify(bodyData),
            });

            if (!result.ok) {
                res.redirect(`payment/${price}`)
            }

            
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    } else {
        res.status(403);
    }
}