/*
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intenta nuevamente para ganar.".
*/

alert(`Bienvenido al juego de la Suerte:`)
//lo ponemos dentro de un bucle para que sigamos jugando.
let sujeto = confirm(`Quieres empesar el juego?`)
while(sujeto){
    
    // creamos la variable para el reto.

    let numR = Math.floor(Math.random()*1000)+1;

    //realizamos la verificacion de lapuntuacion.

    if( numR >= 100){
        alert(`Wooo!, sorprendente la suerte que tienes, obtuviste ${numR}\ndepuntuación\nSUeRTUDO!!!...`);
    }
    else if (numR < 100){
        alert(`Que piña te toco el numero ${numR},\nPerdiste sigue jugando`);
    }

    //creamos una variable para consultar al usuario si quiere seguir jugando
    let preg = confirm(`Quieres seguir jugando?`);
    if (preg){
        alert(`Disfruta del Juego XD`);
    }
    else{
        alert(`WooW!, es una pena Adios!!!`);
        break
    }

}
