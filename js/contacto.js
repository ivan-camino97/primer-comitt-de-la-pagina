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

    /*
    let carrito = []


array de productos//
const allalfajor = [blanco, chocolate, maizena, santafesino]


selectores\\
const contenedoralfajor = document.querySelector('#contenedoralfajor')
const botontabla = document.querySelector('.botontabla')

const casilleroname = document.querySelector('.casilleroname')
const casilleroprecio = document.querySelector('.casilleroprecio')
const casillerocantidad = document.querySelector('.casillerocantidad')

const casilleroname1 = document.querySelector('.casilleroname1')
const casilleroprecio1 = document.querySelector('.casilleroprecio1')
const casillerocantidad1 = document.querySelector('.casillerocantidad1')

const casilleroname2 = document.querySelector('.casilleroname2')
const casilleroprecio2 = document.querySelector('.casilleroprecio2')
const casillerocantidad2 = document.querySelector('.casillerocantidad2')

const casilleroname3 = document.querySelector('.casilleroname3')
const casilleroprecio3 = document.querySelector('.casilleroprecio3')
const casillerocantidad3 = document.querySelector('.casillerocantidad3')
let cantidad = 0

/*funciones
const renderizarcarrito = () => {
    allalfajor.forEach(({tipo, precio, imagen, id, descripcion, cantidad}) => {

        const alfajorarticle = document.createElement('article')
        alfajorarticle.classList.add('contenedor10')
        alfajorarticle.innerHTML = ` 
        <article class="art1">
            <h3>${tipo}</h3>
            <picture>
                <img src="${imagen}" alt="">
            </picture>
            <article>
               <p>precio: ${precio}</p>
               <span>${descripcion}</span>
               <button data-id="${id}" class="btn">agregar al carrito <i class="fas fa-shopping-cart"></i></button>
            </article>
         </article>   
        `
          
        contenedoralfajor.append(alfajorarticle)

    })
}
renderizarcarrito()

const buttonCarrito = document.querySelectorAll('.btn')
    console.log(buttonCarrito);

const agregaralfajores = (e) => {
    const alfajoridseleccionado = e.target.getAttribute('data-id')
    const alfajorseleccionado = allalfajor.find((Alfajor) => Alfajor.id == alfajoridseleccionado)
    const alblanco = alfajoridseleccionado == 001 && console.log('blanco')
    const alnegro = alfajoridseleccionado == 002 && console.log('negro')
    carrito.push(alfajorseleccionado)
    console.log(carrito);
    fetch('https://pokeapi.co/api/v2/pokemon/25')
.then((respuesta) => respuesta.json())
.then((respuestaapi) => {
    const alfajorpokemon =  'el alfajor N°' + alfajoridseleccionado + 'le gusta a' + respuestaapi.name
    carrito.push(alfajorpokemon)
})
if (alfajoridseleccionado == 001){
    casilleroname.textContent = blanco.tipo
    casilleroprecio.textContent = blanco.precio
    casillerocantidad.textContent = blanco.cantidad++
}else if (alfajoridseleccionado == 002){
    casilleroname1.textContent = chocolate.tipo
    casilleroprecio1.textContent = chocolate.precio
    casillerocantidad1.textContent = chocolate.cantidad++
}else if (alfajoridseleccionado == 003){
    casilleroname2.textContent = maizena.tipo
    casilleroprecio2.textContent = maizena.precio
    casillerocantidad2.textContent = maizena.cantidad++
}else if (alfajoridseleccionado == 004){
    casilleroname3.textContent = santafesino.tipo
    casilleroprecio3.textContent = santafesino.precio
    casillerocantidad3.textContent = santafesino.cantidad++
}

}
const alerta = (e) => {
    const alfajoridseleccionado = e.target.getAttribute('data-id')
    const alfajorseleccionado = allalfajor.find((Alfajor) => Alfajor.id == alfajoridseleccionado)
    const preciototal = carrito.reduce((acc, alf) => acc + alfajorseleccionado.precio * alfajorseleccionado.cantidad, 0)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `el total de su compra es ${preciototal}`,
        showConfirmButton: false,
        timer: 1500
      })
}

//eventlisteners
buttonCarrito.forEach((button) => {
    button.addEventListener('click', agregaralfajores)
    
})

botontabla.addEventListener('click', alerta) *\

//ejecuciones