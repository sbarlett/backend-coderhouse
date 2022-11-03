const router = require('express').Router()
const  Productos  = require('../../storage/Container')
const products = new Productos('products.txt')

products.save({title: 'Casco', price: 15000, thumbnail: 'https://cdn1.iconfinder.com/data/icons/city-flat-2/512/vehicle_transport_auto_drive_car-512.png'})
products.save({title: 'Auto', price: 300000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-cielo-azul-clasico-caballo-mesteno-13210833/'})
products.save({title: 'Moto', price: 700000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-vehiculo-estacionamiento-pavimento-13073573/'})
products.save({title: 'Skate', price: 10000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-tejanos-deporte-libertad-4570776/'})


router.get('/', async(_req, res, next) => {
    try {
        let data = await products.getAll()
        res.status(200).render('pages/index', {product: data })
    } catch(error) {
        next(error)
    }
})

router.post('/productos', async(req, res, next) => {
    try {
        const {title, price, thumbnail} = req.body
        await products.save({title, price,thumbnail})
        res.redirect('/')
    } catch (error) {
        next(error)
    }
})

module.exports = router