let inputName = document.getElementById('formulario')


inputName.addEventListener('submit', (event) =>{
    event.preventDefault()

    let username = document.getElementById('name').value
    console.log(username);

    let email = document.getElementById('email').value
    console.log(email);
})




