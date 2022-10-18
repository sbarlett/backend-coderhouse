const fs = require('fs');

let id = 0

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName
        this.product = []
    }
       async save(product){     
            try {
                const url = this.fileName

                const data = JSON.stringify(product, null, 2)
                const productos = await JSON.parse(data)
                productos.id = ++id

                console.log(productos,`Producto Guardado con id ${productos.id}`);
                this.product.push(productos)
                const saveProduct = JSON.stringify(this.product, null, 4)
                await fs.promises.writeFile(url, saveProduct, 'utf-8')
        } catch (error) {
            throw new Error(error)
        }
    }


    async getById(id){
        try {
            const url = this.fileName

            const fetch = await fs.promises.readFile(url, 'utf-8')
            const productos = await JSON.parse(fetch)
            const getProductById =  productos.filter( i => (i.id === id))
            console.log(getProductById, `Buscar por id: ${id}`)
        } catch (error) {
            throw new Error(error)
        }   
    }


     async getAll(){
        try {
            const url = this.fileName

            const fetch = await fs.promises.readFile(url, 'utf-8')
            const productos = await JSON.parse(fetch)
            const getProducts = productos.map( data => data)
            console.log(getProducts, 'Buscar todos los productos');
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteById(id){
        try {
            const url = this.fileName

            const fetch = await fs.promises.readFile(url, 'utf-8')
            const productos = await JSON.parse(fetch)
            const deleteProduct =  productos.filter( i => (i.id !== id))

            // Trae todos los elemenos menos el filtrado
            console.log(deleteProduct);
            const result = JSON.stringify(deleteProduct, null, 2)
            await fs.promises.writeFile(url, result, 'utf-8')

        } catch (error) {
            throw new Error(error)
        }   
    }

    async deleteAll(){
        try {
            const url = this.fileName

            const fetch = await fs.promises.readFile(url, 'utf-8')
            let productos = await JSON.parse(fetch)
            // Limpiamos array de productos
            productos.length = 0
        
            const result = JSON.stringify(productos)
            await fs.promises.writeFile(url, result, 'utf-8')

        } catch (error) {
            throw new Error(error)
        }   
    }
}


const product1 = new Contenedor('./product.txt')
product1.save({title: 'Casco', price: 15000, thumbnail: 'https://www.pexels.com/es-es/foto/ciudad-hombre-calle-acera-4992710/'})
product1.save({title: 'Auto', price: 300000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-cielo-azul-clasico-caballo-mesteno-13210833/'})
product1.save({title: 'Moto', price: 700000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-vehiculo-estacionamiento-pavimento-13073573/'})
product1.save({title: 'Skate', price: 10000, thumbnail: 'https://www.pexels.com/es-es/foto/calle-tejanos-deporte-libertad-4570776/'})

product1.save({title: 'Rueda', price: 32000, thumbnail: 'https://www.pexels.com/es-es/foto/fotografia-en-primer-plano-de-la-rueda-del-vehiculo-cromado-244553/'})
product1.save({title: 'Bicicleta', price: 55000, thumbnail: 'https://www.pexels.com/es-es/foto/mesa-negro-bici-bicicleta-5464921/'})
product1.save({title: 'Pelota de Futbol', price: 7050, thumbnail: 'https://www.pexels.com/es-es/foto/balon-de-futbol-en-el-campo-de-hierba-durante-el-dia-46798/'})
product1.save({title: 'Televisor', price: 250000, thumbnail: 'https://www.pexels.com/es-es/foto/television-inteligente-de-pantalla-plana-encendida-por-delante-1444416/'})
product1.save({title: 'Parlante', price: 12000, thumbnail: 'https://www.pexels.com/es-es/foto/fotografia-de-primer-plano-de-altavoz-negro-2651794/'})
product1.save({title: 'Auriculares', price: 7500, thumbnail: 'https://www.pexels.com/es-es/foto/smartphone-samsung-negro-encendido-entre-auriculares-1337753/'})
product1.save({title: 'Mochila', price: 4500, thumbnail: 'https://www.pexels.com/es-es/foto/persona-sosteniendo-mochila-negra-3731256/'})

product1.getById(2);
product1.getAll();

// Descomentar para eliminar productos 
// product1.deleteById(1);
// product1.deleteAll()

module.exports = {
    product1,
    Contenedor
}