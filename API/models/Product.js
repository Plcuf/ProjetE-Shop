const connect = require('../config/db');

class Product {
    static getProduct(ProductId){
        const query = 'SELECT * FROM Product WHERE id = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [ProductId], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }
    static getImages(ProductId){
        const query = 'SELECT * FROM Images WHERE id_1 = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [ProductId], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }
}

module.exports = Product;