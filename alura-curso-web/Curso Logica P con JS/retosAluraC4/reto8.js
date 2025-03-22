/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero }
utilizando un if-else y muestra el mensaje correspondiente. */

alert(`Verificando si es positivo o negativo`);

//array

let tValores = [];

//variables.


//verificamos si lo que el usurio intruce es numero:

//evaluamos dentro de una iteracion.

for (let i = 1; i <= 3; i++){
    let numero = prompt(`Ingrese un numero por favor:\n`);
    
    if (!isNaN(numero) && numero != ''){
        let conver= parseInt(numero);

        if(conver > 0){
            console.log(`El numero que introduciste ${numero}, es mayor`);
        }
        else if (conver < 0){
            console.log(`El numero que introduciste ${numero}, es menor`);
        }
        else if(conver == 0 ){
            console.log(`El numero que introduciste ${numero}, es neutro`);
        }
        tValores.push(conver);
    }
    else if(isNaN(numero)){
        alert(`Lo que introduciste ${numero}, no solo contiene numeros.`)
        i--
    }
    else {
        alert(`No esta introduciendo ningun valor por favor no hagas eso!!!!`)
        i--
    }

}
console.log(`Los valores introducidos fueron ${tValores}`);