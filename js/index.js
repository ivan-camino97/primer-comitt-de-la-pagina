
let carrito = []
class Panes{
    constructor(tipo, kg, unidad,){
    this.tipo = tipo
    this.kg = kg
    this.unidad = unidad
    }
}
const Panes1 = new Panes('manteca', 580, 35)
const Panes2 = new Panes('frances', 400, 70,)
const panes3 = new Panes('pebetes', 0, 90 )
const panes4 = new Panes('molde salvado', 580, 580)
const panes5 = new Panes('campo', 400, 350)
const panes6 = new Panes('negros salvado', 580, 35)


const eleccionProducto = () => {
const eleccionUsuario = prompt('elegi el tipo de pan que desees')
switch (eleccionUsuario) {
    case 'manteca':
        console.log('elegiste pan de manteca')
        carrito.push(Panes1)
        break;

        case 'frances':
        console.log('elegiste pan frances')
        carrito.push(Panes2)
            break;

            case 'pebetes':
        console.log('elegiste pebetes')
        carrito.push(panes3)
        break;

        case 'molde salvado':
        console.log('elegiste pan de molde de salvado')
        carrito.push(panes4)
        break;

        case 'campo':
        console.log('elegiste pan de campo')
        carrito.push(panes5)
        break;

        case 'negro salvado':
            console.log('elegiste pan negro de salvado')
            carrito.push(panes6)
        break;
    default:
        console.log('elegi un tipo de pan correcto')
        break;
}
let rtausuario = prompt('desea llevar por unidad o por kg?')
if(rtausuario == 'kg'){
    rtausuario += eleccionUsuario * producto.kg

}else if(rtausuario == 'unidad'){
    rtausuario += eleccionUsuario * producto.unidad
}
if (confirm('desea agregar otro producto?')) {
    eleccionProducto()
}
}
eleccionProducto()


const totalCarrito = () => {
   let sumaTotal = 0
   for(const producto of carrito){
       sumaTotal += rtausuario
   }
   return sumaTotal
}

alert('gracias por su compra,el total es de $' + totalCarrito())

const tituloss = document.querySelectorAll('.tituloss')
tituloss.forEach((title) => {
title.InnerText = 'panaderia'
})
console.log(tituloss);

const inputName = document.querySelector('#name')
console.log(inputName)

inputName.addEventListener('change', () =>{
    console.log(inputName.value);
})




