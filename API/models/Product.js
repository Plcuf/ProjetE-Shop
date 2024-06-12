const connection = require('../config/db');

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
        const query = 'SELECT path FROM Images WHERE id_1 = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [ProductId], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
    static getCategory(Type){
        const query = 'SELECT * FROM Product WHERE Type = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [Type], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        })
    }
    static getFranchise(FranchiseID){
        const query = 'SELECT * FROM Product WHERE id_1 = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [FranchiseID], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        })
    }
    static getProducts(){
        const query = 'SELECT * FROM Product;';
        return new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err){
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        });
    }
}

module.exports = Product;