/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

//variables
let data;
let message;
let result = 0;
let div;
let tagH;
let nodeT;
let mydiv;
let newT;

//function datas entry
function saludar(){
    data = document.getElementById('textoU').value;
    verify(data);
    clean();
}

//function verify the datas
function verify(data1){
    if(!isNaN(data1) && data1 != ''){
        operation(data1);
    }
    else if (isNaN(data1)){
        message = `Lo que estas ingresando ${data1}, no es valido\nVuelve a intentarlo`;
        showD(message);
    }
    else {
        message = `Estas ingresando datos vacios\nVuelve a intentarlo`;
        showD(message);
    }
}

//fnction data operation 
function operation(data2){
    data2 = parseInt(data2);
    for(var i = 9; i > 0; i--){
        result = data2 * i; 
        message = `Miltiplicar ${data2} por ${i} es: ${result}`;
        showD(message);
    }
}

//function data show;
function showD( mess){//modificar el resultado ya que genera muchos tag h2 y no es conveniente
    newT = document.createElement('h2');
    mydiv = document.getElementById('mostrarN');
    newT.textContent = mess;
    mydiv.appendChild(newT);
    // div = document.getElementById('mostrarN');
    // tagH = document.createElement('h3');
    // nodeT = document.createTextNode(texto);
    // h2.appendChild(nodeT);
    // div.appendChild(h2);
    // data = document.getElementById('nombU');
    // data.innerText = mess;
}

//function clean entry.
function clean(){
    document.getElementById('textoU').value = '';
}
//funciton start
function start(){
    document.getElementById('mess').innerText = `Ingrese un numero; `;
}

start();
