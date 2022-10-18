const express = require('express')
const fs = require('fs');
require('dotenv').config()

const app = express();


app.get( '/', (_req, res) =>{
    try {
        res.status(200).send('Buscar:  /productos y /productosRandom')

    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err.message
        })
    }
})

app.get( '/productos', async(_req, res) =>{
    try {
        const getProducts = await fs.promises.readFile('./product.txt', 'utf-8')
        res.status(200).send(getProducts)

    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err.message
        })
    }
})

app.get( '/productoRandom', async(_req, res) => {
    try {
        const getProducts = await fs.promises.readFile('./product.txt', 'utf-8')
        const data = await JSON.parse(getProducts)
        
        
        function getRandom(min, max) {
            const num = Math.random() * (max - min) + min
            return Math.ceil(num)
         }
        const random = getRandom(0,11)

        const productRandom = data.filter( i => i.id === random)
        res.status(200).send(productRandom)
        
    } catch (err) {
        res.status(500).json({
            succes: false,
            error: err.message
        })
    }
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})


