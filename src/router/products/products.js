const router = require('express').Router()
const { Contenedor } = require('../../storage/Container')
const products = new Contenedor('products.txt')

// Inicializo lista de productos
products.save({title: 'Casco', price: 15000, thumbnail: 'https://www.pexels.com/es-es/foto/ciudad-hombre-calle-acera-4992710/'})
products.save({title: 'Auto', price: 300000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-cielo-azul-clasico-caballo-mesteno-13210833/'})
products.save({title: 'Moto', price: 700000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-vehiculo-estacionamiento-pavimento-13073573/'})
products.save({title: 'Skate', price: 10000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-tejanos-deporte-libertad-4570776/'})


// Crear producto
router.post('/', async(req, res, next) => {
    try {
        await products.save(req.body)
        res.status(200).json({
            success: true,
            data: products
        })
    } catch(error) {
        next(error)
    }
})

router.get('/', async(_req, res, next) => {

    try {
        let data = await products.getAll()
        if (products) {
            res.status(200).json({
                data: data
            })
        } else {
            res.status(404).json({
                response: 'can not find'
            })
        }
    } catch(error) {
        next(error)
    }
})


router.get('/:id', async(req, res, next) => {
    const { id } = req.params
    try {
        let dataP = await products.getById(id)
        if (dataP) {
            res.status(200).json({
                data: dataP
            })
        } else {
            res.status(404).json({
                response: 'not found'
            })
        }
    } catch(error) {
        next(error)
    }
})


// router.put('/:id', async(req, res) => {
// //ruta para modificar un producto
// //utiliza el metodo PUT y requiere PARAMS para el id y BODY para la propiedad a modificar
//     let { id } = req.params
//     try {
//         let data = await products.putById(id, req.body)
//         if (data) {
//             res.status(200).json({
//                 response: data
//             })
//         } else {
//             res.status(404).json({
//                 response: 'can not find'
//             })
//         }
//     } catch(error) {
//         next(error)
//     }
// })

// router.delete('/:id', async(req, res) => {
// //ruta para eliminar un producto
// //utiliza el metodo DELETE y requiere PARAMS para el id
//     let { id } = req.params
//     try {
//         let data = await products.deleteById(id)
//         if (data) {
//             res.status(200).json({
//                 response: 'product deleted'
//             })
//         } else {
//             res.status(404).json({
//                 response: 'can not find'
//             })
//         }
//     } catch(error) {
//         next(error)
//     }
// })

module.exports = router