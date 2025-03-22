/*
Crea un programa de cuenta regresiva.
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

//declaramos variables de inicio y fin del loop.

let inicio = prompt(`Ingrese el incicio de la cuenta regresiva:\n`);
let fin = 0;

//iniciamos el loop.

while (inicio > fin){
    if(inicio > 1){
        alert(`despege en ${inicio}s`);
    }
    else if(inicio == 1){
        alert(`Despegue en ${inicio}s\nVAmonos a la luna`);
    }
    inicio--;
}