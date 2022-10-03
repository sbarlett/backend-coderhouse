



class Usuario {
    constructor( nombre, apellido, libros = [], mascotas = [] ){
        this.nombre    = nombre;
        this.apellido  = apellido;
        this.libros    = libros;
        this.mascotas  = mascotas;
    }
        
    getFullName(){
         return `Nombre completo: ${this.nombre} ${this.apellido}`
    }

    addMascota(newMascota){
        return this.mascotas.push(newMascota)
    }

    countMascootas(){
        return this.mascotas.length
    }
       

    addBock(newLibro){
        return this.libros.push(newLibro)
    }

    getBookNames(){
        const booksName = this.libros.map( libro => libro.name)
        return booksName
    }
}

const usuario = new Usuario('Santiago', 'Barletta', [{name: 'Libro', author: 'Autor'}], ['Perro']);
console.log(usuario);


// Nombre Completo
const user = usuario.getFullName();
console.log(user);

// Agregar Mascota
const userAddMascota = usuario.addMascota('Gato');
const user2AddMascota = usuario.addMascota('Caballo');

// Contar Mascotas
const userContarMascota = usuario.countMascootas();
console.log(userContarMascota);

// Aregar Libros
const userAddBock = usuario.addBock({name: 'Libro1', autor: 'Autor1'})
const user2AddBock = usuario.addBock({name: 'Libro2', autor: 'Autor2'})

// Mostrar Nombre de Libros
const userGetBookNames = usuario.getBookNames();
console.log(userGetBookNames);



