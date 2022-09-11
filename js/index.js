let carrito = []


/*array de productos*/
const allalfajor = [blanco, chocolate, maizena, santafesino]


/*selectores*/
const contenedoralfajor = document.querySelector('#contenedoralfajor')

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


/*funciones*/
const renderizarcarrito = () => {
    allalfajor.forEach(({tipo, precio, imagen, id, descripcion}) => {

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
               <button data-id="${id}" class="btn">comprar</button>
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

    if (alfajoridseleccionado == 001){
        casilleroname.textContent = blanco.tipo
        casilleroprecio.textContent = blanco.precio
    }else if (alfajoridseleccionado == 002){
        casilleroname1.textContent = chocolate.tipo
        casilleroprecio1.textContent = chocolate.precio
    }else if (alfajoridseleccionado == 003){
        casilleroname2.textContent = maizena.tipo
        casilleroprecio2.textContent = maizena.precio
    }else if (alfajoridseleccionado == 004){
        casilleroname3.textContent = santafesino.tipo
        casilleroprecio3.textContent = santafesino.precio
    }

})
    
}
//eventlisteners
buttonCarrito.forEach((button) => {
    button.addEventListener('click', agregaralfajores)
})

//ejecuciones