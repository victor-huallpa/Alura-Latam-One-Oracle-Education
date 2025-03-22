/*
Crea una función que calcule el promedio de los elementos en una lista de números.
*/
//array 
let element = [1, 3, 5, 6];
let result = 0;

//function operation
function operation(){
    for(var i = 0; i < element.length; i++){
        result+=element[i]
    }
    result = result/(element.length)
    console.log(result);
}
operation(element);