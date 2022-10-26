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
                this.product.push(productos)
                const saveProduct = JSON.stringify(this.product, null, 4)
                await fs.promises.writeFile(url, saveProduct, 'utf-8')
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id){
        try {
            const url = this.fileName
            const fetch = await fs.promises.readFile(url, 'utf-8')
            const productos = await JSON.parse(fetch)
            const product =  productos.find(pro => pro.id == id)
            if(product){
                return product
            }
            return `No existe un producto con id: ${id}`
        } catch (error) {
            console.log(error);
        }   
    }

     async getAll(){
        try {
            const url = this.fileName
            const fetch = await fs.promises.readFile(url, 'utf-8')
            const productos = await JSON.parse(fetch)
            const getProducts = productos.map( data => data)
            return getProducts
        } catch (error) {
            console.log(error);
        }
    }


    async putById(id, props) {
        try {
            const url = this.fileName
            const fetch = await fs.promises.readFile(url, 'utf-8')
            let productos = await JSON.parse(fetch)
            let product =  productos.find(pro => pro.id == id)
            
            const newProduct = {
                ...product,
                ...props
            }

            const updateProduct = productos.map( prod => {
                if(prod.id == newProduct.id){
                    prod = newProduct
                }
                return prod 
            })

            const saveProduct = JSON.stringify(updateProduct,null,3)
            await fs.promises.writeFile(url, saveProduct)
            return newProduct
        } catch (error) {
            console.log(error);
        }   
    }

    async deleteById(id){
        try {
            const url = this.fileName
            const fetch = await fs.promises.readFile(url, 'utf-8')
            let productos = await JSON.parse(fetch)
            let productDelete =  productos.filter(pro => pro.id != id)
            
            const result = JSON.stringify(productDelete, null, 2)
            await fs.promises.writeFile(url, result, 'utf-8')
            return productDelete
        } catch (error) {
            console.log(error);
        }   
    }
}

module.exports = {
    Contenedor
}