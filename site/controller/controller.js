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
        res.render('index', {listProducts});
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

exports.Product = async (req, res) => {
    let productId = req.params.id;
    fetch(`http://localhost:3000/product/${productId}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let product = data;
        res.render('item', product);
    })
    .catch(err => {
        console.log(err);
        res.status(404);
    })
}

exports.Cart = async (req, res) => {
    try {
        res.render('cart');
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

