/*
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
*/

//creamos las variables de limite e inicio

let limite = 0;
let inicio = 10;

//creamos el loop
alert(`Iniciamos cuenta regresiva`)
while (inicio > limite){
    if (inicio > 1){
        alert (`Lanzamiento en ${inicio}s`);
        inicio--;
    }
    else{
        alert(`lanzamiento en ${inicio}s\nVamonos a la Luna`);
        inicio--;
    }
}
