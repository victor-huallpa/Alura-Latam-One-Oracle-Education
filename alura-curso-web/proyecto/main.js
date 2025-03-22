// crear un algoritmo para generar contrase;oias seguras

let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');

function generar(){
    //condicionales, permite al sistema tomar una condicion
    let nDigitado = parseInt(cantidad.value);
    console.log(nDigitado);
    if (nDigitado < 8){
        alert('la cantidad de caracteres que par atu contrase;a no es optima');
    }
}










