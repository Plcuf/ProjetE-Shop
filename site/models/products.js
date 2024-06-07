const axios = require('axios');

class Products {
    static async getProducts() {
        return await axios.get('http://localhost:3000/products')
        .then(response =>{
            response.data.Products.forEach(product => {
                product.Promo = product.Price - (product.Price*product.Promo)/100.00;
            })
            console.log(response.data);
            return response.data.Products
        }).catch(err => {
            console.log(`Erreur getImages : ${err}`);
            return null
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