/*
creando un jugo de adivinanza
*/
// creacion de la variable con random para obtener un munero aleatorio
let numSereto = Math.floor(Math.random()*10)+1;
let numUsuario = 0;
// let res = 'to'
//creamos una variable que cuente los intentos 
let intentos = 0;

//cantidas de intentos dados.
let intentosD = 3;

//loop de pregunta para ingresar un numero
while (numSereto != numUsuario){

    if (intentos == intentosD){
        break
    }
    numUsuario = prompt("me indicas un nuemro de entre 1 y 10 por favor:");
    alert(`el numero que escribiste es ${numUsuario}`);
    console.log(numUsuario);

    // condicionales 


    //identifica si es el numero aleatorio
    if (numSereto == numUsuario){
        intentos++
        alert(`Eres un adivino acertaste!!!! \n el numero secreto es: ${numSereto}\n lo isiste en ${intentos} ${intentos == 1? 'intento': 'intentos'}`);
    }
    // en caso se introdusca otro numero, texo o caracter especial
    else if (numUsuario != numSereto){
        res = 'tos'
        alert(`el numero ${numUsuario} no es correcto sigue intentando`)
        //verificacion de que tan lejos o cerca esta de adivinar el numero o introdujo texo y/o caracter especial
        if (numSereto < numUsuario){
            intentos++
            alert(`Huy!!! te pasaste, el numero secreto es menor que ${numUsuario}\n sigue intentando`);

        }
        else if (numSereto > numUsuario){
            intentos++
            alert(`Huy!!! te falto, el numero secreto es mayor que ${numUsuario}\n sigue intentando`);

        }
        else {
            alert(`lo que escribiste ${numUsuario} es un texto o contine caracteres especiales\n Escribe solo numero!!!!`)
        }
    }
    //en caso si algo asle mal en el programa
    else{
        alert("algo salio mal");
    }
}
if(intentos == intentosD){
    alert(`lo siento alcanzaste el numero de intentos limites que son ${intentos}`)
}