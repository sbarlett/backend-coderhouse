const express = require('express');

const routeProducts = require('./products/products')

const router = express.Router();

router.use('/', routeProducts)

module.exports = router;