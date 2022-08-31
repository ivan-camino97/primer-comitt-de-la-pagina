const { tipo, precio, imagen, id, descripcion } = Alfajores
let carrito = []


/*array de productos*/
const allalfajor = [blanco, chocolate, maizena, santafesino]

const arrayspread = [...allalfajor]
console.log(arrayspread);


/*selectores*/
const contenedoralfajor = document.querySelector('#contenedoralfajor')




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
    const alfajorseleccionado = allalfajor.find(({id}) => id == alfajoridseleccionado)
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
    
}
//eventlisteners
buttonCarrito.forEach((button) => {
    button.addEventListener('click', agregaralfajores)
})

//ejecuciones