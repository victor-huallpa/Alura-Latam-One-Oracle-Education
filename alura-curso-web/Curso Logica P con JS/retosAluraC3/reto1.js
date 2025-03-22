/* 
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
*/

// creamos una varable que inicie en uno
let cont = 0; 
//creamos la variable que contiene el limite de 10 iteraciones 
let limite = 10;
alert(`Inicio de la cuenta susesiva`)
while (cont < limite){
    cont++
    if (cont < 10){
        alert(`Lanzamiento en ${cont}s`);
    }
    else{
        alert(`Lanzamiento en ${cont}s \nVamos a la Luna.`);
    }

}
