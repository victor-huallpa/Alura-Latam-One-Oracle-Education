/*
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/

//varibles 

let inicio = 1;
//loop
let valor = true;
while(valor){
    let final = prompt(`En cuanto tiempo quiere que se haga el lanzamiento?\nIngrese valor`);
    //verificaion de tipo de dato.
    if (!isNaN(final) && final != ''){
        //loop
        while(inicio <= final){
            if (inicio < final){
                console.log(`Lanzamiento en ${inicio}s`)
            }
            else if (inicio == final){
                console.log(`Lanzamiento en ${inicio}s,\nVamonos a la Luna`)
            }
            inicio++
        }
        valor = false;
    }
    else if (isNaN(final)){
        alert(`Lo que introduciste para la cuenta no son numeros!!!..`)
    }
    else{
        alert(`por favor ingrese un numero no deje espacios vacios!!`)
    }
}