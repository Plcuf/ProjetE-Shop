const express = require('express');
const routeur = express.Router();
const controller = require('../controller/controller');

routeur.get('/', controller.ErrorPage);
routeur.get('/accueil', controller.Index);
routeur.get('/produit/:id', controller.Product);
routeur.get('/cart', controller.Cart);
routeur.get('/favorites', controller.Favorites);

module.exports = routeur;