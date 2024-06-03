const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/product/:id', controller.getProduct);

router.get('/images/:id', controller.getImages);

router.get('/category/:type', controller.getCategory);

router.get('/franchise/:id', controller.getFranchise);

module.exports = router;