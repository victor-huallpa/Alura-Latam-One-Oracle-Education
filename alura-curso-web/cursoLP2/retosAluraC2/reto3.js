/*
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/
//variables

//funcion click
function saludar(){

    let numero = document.getElementById('textoU').value;
    verificar(numero);
    numero = document.getElementById('textoU').id;
    limpiar(numero);
}

//funcion verificaion
function verificar(valor){
    if(!isNaN(valor) && valor != ''){
        mostrar(valor);
        return;
    }
    else if(isNaN(valor)){
        alert(`Lo que ingresaste ${valor}, no contiene solo numeros\nVuelve a intentaro:`);
    }
    else {
        alert(`Por favor ingrese datos, no trate de ingresar el casillero en blanco.!!!`);
    }
}

//funcion mostrar datos
function mostrar(val){
    val = parseInt(val);
    let resultado = 2 * val
    let myh3 = document.getElementById('nombU');
    myh3.innerText= `El doble de ${val} es ${resultado}`;
}

//funcion limpiar input
function limpiar(ids){
    console.log(`llege aquí`);
    document.getElementById(ids).value = "";
}