/*
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/
//array 
let element = [2, 6,3,7,3,4,15,8];
let date = 0;

//function show
function show(){
    for(var i = element.length; i >= 0; i--){
        if(date < element[i]){
            date = element[i]
        }
    }
    console.log(date);
}

show(element);