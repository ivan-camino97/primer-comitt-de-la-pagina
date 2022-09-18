let carrito = []


/*array de productos*/
const allalfajor = [blanco, chocolate, maizena, santafesino]


/*selectores*/
const contenedoralfajor = document.querySelector('#contenedoralfajor')
const botontabla = document.querySelector('.botontabla')
const tablacarrito = document.querySelector('tbody')
const botonvaciar = document.querySelector ('.botonvaciar')
const total = document.querySelector('.total')

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

document.addEventListener('DOMcontentloaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.setItem('carrito'))

        actualizarcarrito()
    }
})
/*funcion de renderizado*/
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
//funcion para actualizar el carrito y agregar los alfajores
const actualizarcarrito = () => {

    tablacarrito.innerHTML = ''

    carrito.forEach((alfajor) =>{
        const tr = document.createElement('tr')
        tr.className = ('tr')
        tr.innerHTML = `
           <td class="td">${alfajor.tipo}</td>
           <td class="td">${alfajor.precio}</td>
           <td class="td">${alfajor.cantidad}</td>
        `
tablacarrito.appendChild(tr)
localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    total.innerText = carrito.reduce((acc,alfajor) => acc + alfajor.precio, 0)
}

const buttonCarrito = document.querySelectorAll('.btn')
    console.log(buttonCarrito);
//funcion para agregegar id a cada boton y seleccionar alfajores
const agregaralfajores = (e) => {

    const existe = carrito.some (alfajor => alfajor.id === alfajorseleccionado)

    if(existe) {
        const alf = carrito.map (alf => {
            if (alfajor.id === alfajorseleccionado)
            alfajoridseleccionado.cantidad++
        })
        }

    const alfajoridseleccionado = e.target.getAttribute('data-id')
    const alfajorseleccionado = allalfajor.find((Alfajor) => Alfajor.id == alfajoridseleccionado)
    const alblanco = alfajoridseleccionado == 001 && console.log('blanco')
    const alnegro = alfajoridseleccionado == 002 && console.log('negro')
    carrito.push(alfajorseleccionado)
    console.log(carrito);
    actualizarcarrito()
    fetch('https://pokeapi.co/api/v2/pokemon/25')
.then((respuesta) => respuesta.json())
.then((respuestaapi) => {
    const alfajorpokemon =  'el alfajor N°' + alfajoridseleccionado + 'le gusta a' + respuestaapi.name
    carrito.push(alfajorpokemon)
})
}


//eventlisteners
buttonCarrito.forEach((button) => {
    button.addEventListener('click', agregaralfajores)
    })

    botonvaciar.addEventListener('click', () => {
        carrito.length = 0
        actualizarcarrito()
    })

//ejecuciones