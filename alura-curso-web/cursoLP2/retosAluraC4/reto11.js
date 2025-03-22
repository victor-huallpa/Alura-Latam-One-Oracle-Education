/*
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//varibles 
let array = [];
let array2 = [];
let data;
let message;

//function saludar
function saludar(){
    data = document.getElementById('textoU').value;
    validate(data);
    clean()
}

function validate(data1){
    if(!isNaN(data1) & data1 != ''){
        save(data1);
    }
    else if (isNaN(data1)){
        message = `Lo que ingresaste ${data1}, No solo contiene numeros vuelve a intentarlo.`;
        show(message);
    }
    else{
        message = `Estas ingresasdo datos vacios!!!`;
        show(message);
    }
}

function save(data2){
    if(array.length  <= 3){
        data2 = parseInt(data2);
        array.push(data2);
    }
    else if ( array.length == 4) {
        console.log(`this here 45`);
        operation();
    }
}

function operation(){
    for ( var i = 0; i < array.length; i++){
        array2.push(array[i]**2)
    }
    message = `El array con los numeros ingresados es ${array}\nthe new array is ${array2}.`;
    show(message);
}

function show(date3){
    let myh3 = document.getElementById('nombU');
    myh3.innerText = date3;
}

function clean(){
    document.getElementById('textoU').value = '';
    // array = [];
    // array2 = [];
}