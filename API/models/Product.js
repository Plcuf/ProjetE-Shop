const connection = require('../config/db');

class Product {
    static getProduct(ProductId){
        console.log("models");
        const query = 'SELECT * FROM Product WHERE id = ?;';
        return new Promise((resolve, reject) => {
            console.log("pormsss");
            connection.query(query, [ProductId], (err, results) => {
                console.log(err,results);
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
                    resolve(results[0]);
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
                    resolve(results[0]);
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
                    resolve(resulsts[0]);
                }
            })
        })
    }
}

module.exports = Product;