class Alfajores{
    constructor(tipo, precio, imagen, id, descripcion){
    this.tipo = tipo
    this.precio = precio
    this.imagen = imagen
    this.id = id
    this.descripcion = descripcion
    }
}
const blanco = new Alfajores('blanco con dulce de leche', 200, '../images/dulcedeleche.jpg', 001, 'alfajor blanco con dulce de leche')
const chocolate = new Alfajores('chocolate', 200, '../images/alfchoco.jpg', 002, 'alfajor de chocolate con dulce de leche')
const maizena = new Alfajores('maizena', 200, '../images/mmaizena.jpg', 003, 'alfajor de maizena')
const santafesino = new Alfajores('santafesino', 200, '../images/santafesino.jpg', 004, 'alfajor santafesino tipo roggel')