const axios = require('axios');

class Products {
    static async getProducts() {
        return await axios.get('http://localhost:3000/products')
        .then(response =>{
            response.data.Products.forEach(product => {
                product.Promo = product.Price - (product.Price*product.Promo)/100.00;
            })
            return response.data.Products;
        }).catch(err => {
            console.log(`Erreur getImages : ${err}`);
            return null
        })
    }

    static async getProduct(id) {
        return await axios.get(`http://localhost:3000/product/${id}`)
        .then(response => {
            response.data.product.Promo = reponse.data.product.Price - (reponse.data.product.Price*response.data.product.Promo)/100.00;
            return reponse.data.product;
        }) .catch(err => {
            console.log(err);
            return null;
        })
    }

    static async getImages(id){
        return await axios.get(`http://localhost:3000/images/${id}`)
        .then(response => {
            return response.data.images
        }).catch(err => {
            console.log(`Erreur getImages : ${err}`);
            return null
        })
    }
}


module.exports = Products;