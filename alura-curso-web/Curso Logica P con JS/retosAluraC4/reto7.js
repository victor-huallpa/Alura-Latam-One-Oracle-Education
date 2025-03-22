/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar 
si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. */

//varibles.

let edad = prompt(`ingresse su edad por favor`);
//evaluamos si es numero lo ingresado
if (!isNaN(edad)){
    //evaluamos si es mayor o menor de edad
    if (edad < 18 && edad >= 0){
        console.log(`Uds tiene ${edad} años de edad por lo tanto es considerado "memor de edad"`);
    }
    else if (edad >= 18 && edad <=100){
        console.log(`Uds tiene ${edad} años de edad por lo tanto es considerado "mayor de edad"`);
    }
    else if (edad >100){
        alert(`Uds tiene ${edad} años de edad y ya esta muerto.`)
    }
    else{
        alert(`Algo salio mal`);
    }
}
else if(isNaN(edad)){
    alert(`Lo que ingresaste ${edad}, no es una edad y contiene otras cosas aparte de numeros`)
}
