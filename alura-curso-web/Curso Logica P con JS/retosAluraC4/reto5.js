/*
Crea una variable llamada "valor1" y otra llamada "valor2", 
asignándoles valores numéricos de tu elección. Luego, 
realiza la suma de estos dos valores y almacena el resultado en 
una tercera variable llamada "resultado". Utiliza console.log
para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

//calcualdora simple.

//variables de operaciones.

let valor1 = '';
let valor2 = ''; 
let resultado = '';

let interacion = 1;

// una suma de las tres sumas realizadas

let total = 0;

while(interacion <= 3){
    alert('`Bienvenido a la calculadora que solo suma.');
    valor1 = prompt(`ingrese un numero para realizar la operacin de suma:\n`);
    valor2 = prompt(`ingrese otro numero para realizar la suma;\n`);

    // convertir las cadenas de texto a numero.
    let val1 = parseInt(valor1);
    let val2 = parseInt(valor2);
    if (!isNaN(val1) && !isNaN(val2)){

        resultado = val1 + val2;

        console.log(`La suma del ${valor1} y ${valor2} es; ${resultado}`);

        total+= resultado;

    }
    else {
        alert(`Lo que ingresaste no solo contiene numeros!!!\nvuelve a intentarlo`);
        interacion--;
    }

    if(interacion == 3){
        console.log(`el resultado de las tres sumas es: ${total}`)
    }

    interacion++
}