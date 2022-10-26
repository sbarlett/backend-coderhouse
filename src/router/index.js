const express = require('express');

const routeProducts = require('./products/products')

const router = express.Router();

router.use('/productos', routeProducts)


module.exports = router;