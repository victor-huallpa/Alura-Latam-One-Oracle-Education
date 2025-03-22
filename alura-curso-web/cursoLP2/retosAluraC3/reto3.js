/*
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en 
reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la 
cotización del dólar igual a R$4,80.
*/

//variables.
let entryD;
let dollarP = 3.83;
let result = 0;
let message;

// start function
function start(){
    let myh2 = document.getElementById('mess');
    myh2.innerText = 'Engrese cantidad de dollars';
}
//function entry datas.
function saludar(){
    entryD = document.getElementById('textoU').value;
    validate(entryD);
    clean()
}

//function validate the datas entry
function validate(data){
    if(!isNaN(data) && data != ''){
        convertion(data);
    }
    else if(isNaN(data)){
        message = `Lo que ingresaste ${data} no solo contiene numeros\nVuelve a intentarlo!!!`;
        show(message);
    }
    else {
        message = `Estas tratando de ingresas datos nulos\nNo seas menso!!!`
        show(message);
    }
}

//function convertion operation
function convertion(conver){
    conver = parseFloat(conver);
    result = conver*dollarP;
    message = `Si deseas adquirir ${conver} dollars te costara ${result} soles.`;
    show(message);
}

//funciton show conversion
function show(resul){
    let myh3 = document.getElementById('nombU');
    myh3.innerText = resul;
}

//function celan box
function clean(){
    document.getElementById('textoU').value = '';
}
start();