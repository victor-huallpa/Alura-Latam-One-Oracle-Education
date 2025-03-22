/*
Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor 
o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/

//variables.
let nota = '';
let valor = true; 
//loop para que el usurio en caso se equivoque pueda ingresar un dato correcto
while(valor){
    nota = prompt(`Ingrese su calificaion del 1 al 10`);
    //verificamos si ingreso texto o numeros
    if (!isNaN(nota) && nota != ''){
        //validamos el rango de la nota
        if (nota <= 10 && nota >= 0){
            //verificamos si esta aprobado o no.
            if (nota < 7){
                console.log(`Tu nota de ${nota} puntos, no es suficiente para aprobar.`)
            }
            else if(nota >= 7 ){
                console.log(`La nota de ${nota} punos te ayudo a aprovar la materia!!.`)
            }
            valor = false;
        }
        else if( nota > 10 || nota < 0){
            alert(`estas ingresando una nota no valida dentro del rago de calificacion!!!\nVuelve a ingresar tu nota.`)
        }
    }
    else if (isNaN(nota)){
        alert(`Lo que ingresaste ${nota}, no contiene lo que pedimos\nVuelve a intentarlo.`)
    }
    else {
        alert(`Oye tienes que ingresar una nota para ver si aprovaste o no\nNo ingreses datsoa vacios!!`)
    }
}