const express = require('express');

// Route de productos
const routeProducts = require('./products/products')

//Creamos router
const router = express.Router();


// Indexamos routes - Router = archivo barril
router.use('/productos', routeProducts)


module.exports = router;