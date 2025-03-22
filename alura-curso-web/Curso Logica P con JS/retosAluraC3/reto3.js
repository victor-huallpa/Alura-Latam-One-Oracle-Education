/*Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese 
número utilizando un bucle 'while' en la consola del navegador.*/

//creamos la varibles de limitacion para el loop

let inicio = 0;
let fin = prompt(`ingrese el numero que queire, para a cuenta progresiva: \n`);

while(fin > inicio){
    inicio++
    if (inicio < fin ){
        alert(`Inicio en ${inicio}s`)
    }
    else if(inicio == fin){
        alert(`Inicio en ${inicio}S\nCorran`)
    }
}