//&&=se tienen que cumplir todas las condiciones
//||=se tienen que cumplir una de las condiciones
//!=invierte la condicion
//.tolowercase=valida minuscula
//.touppercase=valida mayuscula

/* control flujos*/

/*const nombreusuario = prompt('ingrese su nombre').toLocaleLowerCase()
const contraseña = prompt('ingrese su contraseña')

if(nombreusuario == 'ivan' && contraseña == '1234'){
    console.log('bienvenido ivan');
}else{
    console.log('datos incorrestos');
}*/

/*let total = 0;
let precio;
let productoelegido;
let subtotal;
do{
    productoelegido = parseInt(prompt('ELIJA UNA OPCION\n\n 1- facturas\n2- pan\n3- masas\n4- galletas\n5- calcular total'));
    if(productoelegido === 1 || productoelegido === 2 || productoelegido === productoelegido === 4 || productoelegido === 5){
     if(productoelegido !== 5){
         cantidad = prompt('ingrese la cantidad');
         if (productoelegido === 1) precio = 960;
         else if (productoelegido === 2) precio = 340;
         else if (productoelegido === 3) precio = 2200;
         else if (productoelegido === 4) precio = 1200;

         subtotal = cantidad*precio;
         total = subtotal;
        }
} else {
    productoelegido = 0;
    alert('valor no valido,intente nuevamente');
  }
}while (productoelegido > 0 && productoelegido <= 4);{

}

alert('total de su compra' + subtotal)*/

/*ejercicio for 1*/
/*let fraseelegida = prompt('elige una frase')
let letra = prompt('elige una letra')
let contador = 0;

for(let i = 0; i < fraseelegida.length; i++)
{
    if(letra == fraseelegida[i])
    {
        contador++;
    }
}
alert('el numero de aparicion es:' + contador)
/*ejercicio tabla for*/
/*alert('tabla de multiplicar')
let numero = parseInt(prompt('elija un numero'));

for(let i = 0; i <= 10; i++)
{
    resultado = i*numero
    console.log(i + 'x' + numero + '=' + resultado);
}*/

/*ejercico switch*/
let facturas = 960
let budines = 550
let pan = 340
let eleccionUsuario = prompt('Elija un producto entre: facturas, pan, budines').toLowerCase()
const carrito = () => {

do {
    switch (eleccionUsuario) {
        case "facturas":
            alert('Elegiste el facturas, el valor es de $960.-')
            break;

        case "pan":
            alert('Elegiste pan, el valor es de $340.-')
            break;

        case "budines":
            alert('Elegiste budines, el valor es de $550.-')
            break;

            case "budines y facturas":
                alert( 'el valor de su compra es:'+ (facturas + budines))
                break;

            case "budines y pan":
                alert('el valor de su compra es:'+ (budines + pan))
                break;

            case "facturas y pan":
                alert('el valor de su compra es:'+ (facturas + pan))
                break;

        default:
            alert('El producto seleccionado no se encuentra en stock, ingrese un producto de la lista')
            eleccionUsuario = prompt('Elija un producto entre: facturas, pan, budines').toLowerCase()
            break;
    }
} while (eleccionUsuario != "facturas" && eleccionUsuario != "pan" && eleccionUsuario != "budines" && eleccionUsuario != "budines y facturas" && eleccionUsuario != "budines y pan" && eleccionUsuario != "facturas y pan")

}
carrito()