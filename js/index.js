
let carrito = []


/*array de productos*/
const allalfajor = [blanco, chocolate, maizena, santafesino]


/*selectores*/
const contenedoralfajor = document.querySelector('#contenedoralfajor')




/*funciones*/
const renderizarcarrito = () => {
    allalfajor.forEach((Alfajores) => {

        const alfajorarticle = document.createElement('article')
        alfajorarticle.classList.add('contenedor10')
        alfajorarticle.innerHTML = ` 
        <article class="art1">
            <h3>${Alfajores.tipo}</h3>
            <picture>
                <img src="${Alfajores.imagen}" alt="">
            </picture>
            <article>
               <p>precio: ${Alfajores.precio}</p>
               <span>${Alfajores.descripcion}</span>
               <button data-id="${Alfajores.id}" class="btn">comprar</button>
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
    const alfajorseleccionado = allalfajor.find((Alfajores) => Alfajores.id == alfajoridseleccionado)
    carrito.push(alfajorseleccionado)
    console.log(carrito);
}
//eventlisteners
buttonCarrito.forEach((button) => {
    button.addEventListener('click', agregaralfajores)
})

//ejecuciones


