const Model = require('../models/products');

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
        }

        listProducts.sort((a, b) => b.Promo - a.Promo);
        listProducts.reverse();
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
        res.render('cart', {listProducts});
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.Favorites = async (req, res) => {
    try {
        res.render('likes');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.Pay = async (req, res) => {
    const api_token = '63d6706e-13c0-4aa7-9726-931aa32ccb69';
    try {
        let price = req.params.price;
        res.render('pay', {price});
    } catch (error) {
        res.status(500);
    }
}