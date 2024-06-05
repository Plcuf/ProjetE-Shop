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
        console.log(error);
        res.status(500).json({
            message: 'Internal server error.'
        });
    }
}

exports.getCategory = async (req, res) => {
    const Type = req.params.type;
    try{
        const products = await Product.getCategory(Type);
        if(!products) {
            res.status(404).json({
                message: "Products not found."
            });
        } else {
            res.status(200).json({
                message: "Products found successfully.",
                products
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error."
        });
    }
}

exports.getFranchise = async (req, res) => {
    const FranchiseID = req.params.id;
    try{
        const products = await Product.getFranchise(FranchiseID);
        if(!products) {
            res.status(404).json({
                message: "Products not found."
            });
        } else {
            res.status(200).json({
                message: "Products found successfully.",
                products
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error."
        });
    }
}

exports.getProducts = async(req, res) => {
    try {
        const Products = await Product.getProducts();
        if (!Products) {
            res.status(404).json({
                message: "Products not found."
            })
        } else {
            res.status(200).json({
                message: "Products found successfully.",
                Products
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error."
        })
    }
}