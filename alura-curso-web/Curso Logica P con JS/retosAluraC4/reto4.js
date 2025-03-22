/*
Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
*/

//variables.

let lenguaje = '¿Cual es el lenguaje de programacion\nque te gusta?:';

let pregunta = prompt(`${lenguaje}`);
let cL = pregunta.length;
for(i = 1;i <= cL;i++){
    console.log(`${pregunta}`)
} 