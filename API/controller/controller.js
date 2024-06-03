const Produit = require('../models/Product');

exports.getProduct = async (req, res) => {
    const productID = req.params.id;

    try {
        const product = await Produit.getProduct(productID);
        if (!product) {
            res.status(404).json({
                message: "product not found."
            });
        } else {
            res.status(200).json({
                message: "product found successfully",
                product
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}


exports.getImages = async (req, res) => {
    const ProductID = req.params.id;
    try {
        const images = await Produit.getImages(ProductID);
        console.log(images);
        if (!images) {
            res.status(404).json({
                message: "Product not found."
            });
        } else {
            res.status(200).json({
                message: "Product found successfully.",
                images
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error.'
        });
    }
}