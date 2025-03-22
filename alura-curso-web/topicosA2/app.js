//variables,
let reiniciar;
let numSecreto = numeroRandom();
let mensaje;
let ID;

//funcion verificacion
function verificaion(){
    let numU = document.getElementById('numeroI').value;
    ID = document.getElementById('numeroI').id;
    numU = parseInt(numU);
    validate(numU);
    Delelte(ID);
    return;
}

//funcon validate
function validate(numI){
    if(numI <= 10 && numI > 0){
        show(numI);
    }
    else if (numI <= 0 || numI > 10 ){
        mensaje = `El numeor que ingresaste ${numI}, no esta ne el rango establecido\nVuelve a intentarlo.`;
        textIngresado('p', mensaje);
    }
    else {
        alert(`estas tratando de ingresas un dato bacio\nNo hagas eso!!!`);
    }
}

//funcion show
function show(numU1){
    mensaje = `el numero secreto ${numU1 < numSecreto ? `es mayor que ${numU1}` : (numU1 > numSecreto ? `es menor que  ${numU1}` : `es ${numU1}\nFelicidades!!!`)}`;//operadores condicionales ternarios
    if(numU1 == numSecreto){
        textIngresado('p', mensaje);
        reiniciar = document.getElementById('reiniciar');
        reiniciar.disabled = false;
    }
    else if(numU1 < numSecreto){
        textIngresado('p', mensaje);
    }
    else if(numU1 > numSecreto){
        textIngresado('p', mensaje);
    }
    else{
        alert(`pipipipi`);
    }
    
}

//funcion para insertar texto
function textIngresado(elemento, texto){
    let EleHtml = document.querySelector(elemento);
    EleHtml.innerHTML = texto;
    return;
}

//funcion para generar numero aleatorio.
function numeroRandom(){
    let numSecreto = Math.floor(Math.random()*10)+1;
    return numSecreto;
}

//funcion reiniciar
function otherG(){
    numSecreto = numeroRandom();
    textIngresado('p', 'Ingrese un numero del 1 al 10:');
    reiniciar.disabled = true;
}

//funcion limpiar
function Delelte(iD){
    document.getElementById(iD).value = "";
}

textIngresado('h1', 'NUMERO SECRETO');