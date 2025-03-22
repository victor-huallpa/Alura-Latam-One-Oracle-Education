//verificar si lo que se ingressa es un muenro positivo o negativo
// declaramos la variable
while(true){
    alert(`En caso quieras cerrar el programa pore favor ingrece el numero "0"`)
    let numIn = prompt(`Evaluando Numeros\nIngrese un numero por favor: \n`);
    //creamos variables para la verificacion de que lo que se igrese sea numero.
    let veri =/\d/;
    // let veri2 = /^[a-zA-z]+$/;
    if (veri.test(numIn)){
        if (numIn > 0){
            alert(`Lo que ingresaste ${numIn}, es un numero positivo.`);
        }
        else if (numIn < 0){
            alert(`Lo que ingresaste ${numIn}, es un numero negativo.`);
        }
        else if (numIn == 0){
            alert(`Ingresaste ${numIn}, y es un numero neutro.\n Cerraste el programa gracias ¡chau!..`);
            break
        }
        else {
            alert(`lo que ingresaste ${numIn}, es numero junto a otros caracteres.`)
        }
    }
    else {
        alert(`Lo que ingresaste ${numIn}, no es un numero y contiene otras cosas,\nVuelve a intentarlo`)
    }

}