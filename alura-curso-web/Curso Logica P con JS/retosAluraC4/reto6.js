/*
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada 
"resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a 
[resultado]." en la consola.
*/
//variables
let valor1 = 0;
let valor2 = 0;

let resultado = 0; 

let total = 0;

let iteracion = 1;

while(iteracion <= 3){
    alert(`Bienvenido a la calculadora que solo RESTA.`)
    valor1 = prompt(`ingrese el primer valor por favor:\n `)
    valor2 = prompt(`ingrese el segundo valor por favor:\n `)
    let val1 = parseInt(valor1);
    let val2 = parseInt(valor2);

    if (!isNaN(valor1) && !isNaN(valor2)){
        resultado = val1 - val2;
        total -= resultado;
        console.log(`El resultado de la resta entre ${valor1} y ${valor2} es: ${resultado}`);
        iteracion++
    }
    else{
        if (isNaN(valor1) && isNaN(valor2)){
            alert(`Lo que introduciste ${valor1} y ${valor2}, no solo contienen\nnumeros.`)
        }
        else if (isNaN(valor1)){
            alert(`Lo que introduciste ${valor1}, no solo contiene\nnumeros.`)
        }
        else if ( isNaN(valor2)){
            alert(`Lo que introduciste ${valor2}, no solo contiene\nnumeros.`)
        }
        alert(`Digite solo numeros!!!`)
    }
}
console.log(`La resta total es: ${total}`)