const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/product', controller.getProduct);

router.get('/images', controller.getImages);

module.exports = router;