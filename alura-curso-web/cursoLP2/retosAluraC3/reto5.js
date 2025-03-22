/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que 
se proporcionará como parámetro. Considera Pi = 3,14.
*/

//variables
let data;
let array = [];
let pi = 3.14;
let message;
let perimetro = 0;
let area = 0;

//funcion start or datas entry;
function saludar(){
    data = document.getElementById('textoU').value;
    verify(data);
    clean();
}

//function validate entry
function verify(data1){
    if(!isNaN(data1) && data1 != ''){
        data1 = parseFloat(data1);
        operation(data1);
    }
    else if( isNaN(data1)){
        message = `Lo que ingresaste ${data1}, no solo contiene numero\nVuelve a intentarlo.`;
        showD(message);
    }
    else{
        message = `Estas ingresando datos vacios\nNo hagas eso please.`;
        showD(message);
    }
}

//function data operation
function operation(data2){
    area = pi*((data2)**2);
    perimetro = pi*2*(data2);
    message = `El area de un terreno con radio de ${data2} es: ${area}\n y el perimetro de ${perimetro}`;
    showD(message);
}

//function data show;
function showD(mess){
    data = document.getElementById('nombU');
    data.innerText = mess;      
}

//function box clean
function clean(){
    document.getElementById('textoU').value = '';
}

//function start
function start(){
    data = document.getElementById('mess');
    data.innerText = `Ingrese el radio   \n de su terreno   `;
}
start();