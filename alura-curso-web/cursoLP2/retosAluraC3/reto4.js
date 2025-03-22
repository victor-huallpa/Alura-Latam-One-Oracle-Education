/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura 
y la anchura que se proporcionarán como parámetros.
*/

//variables
let entryD;
let area = 0;
let perimetro = 0;
let array = [];
let message;
let myh2;

//function datas entry
function saludar(){
    entryD = document.getElementById('textoU').value;
    validate(entryD);
    clean();
}

//funcitn data validate
function validate(data){    
    if(!isNaN(data) && data != ''){
        array.push(parseFloat(data));
        if(array.length == 2){
            operation(array);
            array = [];
            start();
        }
    else if( array.length == 1){
        message = `ingrese el segundo valor`;
        showM(message);
    }       console.log('estamos aquí');
    }
    else if(isNaN(data)){
        message  = `Estas tratando de ingresar datos no numericos\nVuelve a intentarlo!!`;
        show(message);
    }
    else{
        message = `Lo que ingresaste no contiene ningun dato.`;
        show(message);
    }
}

//function operation with data
function operation(datas){
    area = datas[0] * datas[1];
    perimetro = (array[0]*2) + (array[1]);
    message = `area ${area} and perimetro ${perimetro}`;
    show(message);
}

//function data clean
function clean(){
    document.getElementById('textoU').value = '';
}

//funciton data show
function show(mess){
    let showD = document.getElementById('nombU');
    showD.innerText = mess;
}

//message show the number
function showM(messa){
    myh2 = document.getElementById('mess');
    myh2.innerText = messa;
}

//function start
function start(){
    myh2 = document.getElementById('mess');
    myh2.innerText = `ingrese el primer valor`;
}
start();