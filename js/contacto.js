let inputName = document.getElementById('formulario')


inputName.addEventListener('submit', (event) =>{
    event.preventDefault()

    let username = document.getElementById('name').value
    console.log(username);

    let email = document.getElementById('email').value
    console.log(email);
})

const objetojavascript = {nombre: 'ivan', apellido: 'camino'}
const objetostringfy = JSON.stringify(objetojavascript)

localStorage.setItem('primerstorage', objetostringfy)
localStorage.setItem('edad', 19)

const datoslocalstorage = localStorage.getItem('primerstorage')
const datojs = JSON.parse(datoslocalstorage)

console.log(datojs);
console.log(datoslocalstorage);

const edad = localStorage.getItem('edad')
console.log(edad)

/*sessionStorage.setItem('datodesession', 'mi dato es el siguiente')

const datodesession = sessionStorage.getItem('datodesession')
console.log(datodesession)

sessionStorage.removeItem('datodesession')*/

const input = document.querySelector('#name')
const button = document.querySelector('#bttn')

let lista = []

button.addEventListener('click', () =>{
    lista.push(input.value)
    input.value = ''
    localStorage.setItem('lista', JSON.stringify(lista))
    console.log(lista);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'forulario completado',
        showConfirmButton: false,
        timer: 1500
      })
})

const listaguardada = JSON.parse(localStorage.getItem(lista)
)
console.log(listaguardada);

/*const eleccionProducto = () => {
    const eleccionUsuario = prompt('elegi el tipo de alfajor deseado')
    switch (eleccionUsuario) {
        case 'blanco con dulce de leche':
            console.log('elegiste alfajor blanco de dulce de leche')
            carrito.push(Alfajores1)
            break;
    
            case 'chocolate':
            console.log('elegiste alfajor de chocolate')
            carrito.push(Alfajores2)
                break;
    
                case 'maizena':
            console.log('elegiste alfajor de maizena')
            carrito.push(productos3)
            break;
    
            case 'santafesino':
            console.log('elegiste alfajor santafesino')
            carrito.push(panes4
                )
            break;
    
        default:
            console.log('elegi un tipo de alfajor correcto')
            break;
    }
    if (confirm('desea agregar otro producto?')) {
        eleccionProducto()
    }
    }
    eleccionProducto()
    
    
    const totalCarrito = () => {
       let sumaTotal = 0
       for(const producto of carrito){
           sumaTotal += Alfajores.precio
       }
       return sumaTotal
    }
    
    console.log('gracias por su compra,el total es de $' + totalCarrito());*/
    