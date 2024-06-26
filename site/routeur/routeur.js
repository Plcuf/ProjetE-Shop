const express = require('express');
const routeur = express.Router();
const controller = require('../controller/controller');

routeur.get('/', controller.ErrorPage);
routeur.get('/accueil/', controller.Index);
routeur.get('/accueil/:filter', controller.Index);
routeur.get('/produit/:id', controller.Product);
routeur.get('/cart', controller.Cart);
routeur.get('/favorites', controller.Favorites);
routeur.get('/payment/:price', controller.Pay);
routeur.get('/payment/:price/:error', controller.Pay);
routeur.get('/paymentHandle/:cvc/:number/:date', controller.PayHandle);

module.exports = routeur;