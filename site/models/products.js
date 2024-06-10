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
        .then( async response => {
            response.data.product.Promo = response.data.product.Price - (response.data.product.Price*response.data.product.Promo)/100.00;
            let product = response.data.product;
            product.images = await this.getImages(product.id);
            return product;
        }) .catch(err => {
            console.log(err);
            return null;
        })
    }

    static async getImages(id){
        return await axios.get(`http://localhost:3000/images/${id}`)
        .then(response => {
            return response.data.images;
        }).catch(err => {
            console.log(`Erreur getImages : ${err}`);
            return null;
        })
    }

    static async getRecommend() {
        let products = [
            {

            },
            {

            }
        ];

        for(let i = 1; i <= 2; i++){
            products[i-1] = await this.getProduct(i);
            console.log(products);
            products[i-1].images = await this.getImages(i);
        }

        return products;
    }
}


module.exports = Products;