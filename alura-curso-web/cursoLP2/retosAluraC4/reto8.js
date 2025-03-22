/*
Crea una función que devuelva la suma de todos los elementos en una lista.
*/
//array 
let element = [34, 4, 45, 9, 12, 56];
let result = 0;

//function show operation
function operation(){
    for(var i = 0; i < element.length; i++){
        console.log(element[i]);
        result = result + element[i];
    }
    console.log(result);
}

operation(element);