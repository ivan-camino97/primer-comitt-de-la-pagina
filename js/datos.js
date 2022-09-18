class Alfajores{
    constructor(tipo, precio, imagen, id, descripcion, cantidad){
    this.tipo = tipo
    this.precio = precio
    this.imagen = imagen
    this.id = id
    this.descripcion = descripcion
    this.cantidad = cantidad
    }
}
const blanco = new Alfajores('blanco con dulce de leche', 200, '../images/dulcedeleche.jpg', 001, 'alfajor blanco con dulce de leche', 1)
const chocolate = new Alfajores('chocolate', 180, '../images/alfchoco.jpg', 002, 'alfajor de chocolate con dulce de leche', 1)
const maizena = new Alfajores('maizena', 220, '../images/mmaizena.jpg', 003, 'alfajor de maizena', 1)
const santafesino = new Alfajores('santafesino', 250, '../images/santafesino.jpg', 004, 'alfajor santafesino tipo roggel', 1)