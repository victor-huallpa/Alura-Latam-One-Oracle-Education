/*
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de 
los elementos uno a uno.
*/

//varible
let array1 = [2, 5, 8, 0];
let array2 = [4, 6, 6, 10];
let array3 = [];
let date;
let message;

//function hello
function saludar(){
    date = document.getElementById('textoU').value;
    validate(date.toLowerCase());
    clean()
}

function validate(date1){
    if ( date1 == 'sumar'){
        add(date1);
    }
    
    else {
        message = `Lo que ingresaste ${date1}, no esta dentro de las operaciones establecidas`;
        show(message);
    }
}

function add(date2){
    for (var i = 0; i < array1.length; i++){
        array3.push(array1[i] + array2[i]);
    }
    if(array3.length == array1.length){
        message = `La suma de los elementos se ejecuto adecuadamente y se almaceno en el ARRAY3 ${array3}`;
        show(message);
    }
}

function show(date3){
    let myh3 = document.getElementById('nombU');
    myh3.innerText = date3;
}

function clean(){
    document.getElementById('textoU').value = '';
    array3 = [];
}