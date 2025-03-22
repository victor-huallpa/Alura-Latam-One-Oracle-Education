/*
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/

//Variables

let valor1;
let valor2;
let resultado;
let ente1;
let ente2;
let valor = true;

//funcion pedir datos
function sumaU(){
    while(valor){
        valor1 = prompt(`Por favor ingrese el primer dato:\n`);
        verificar(valor1);
    }
    valor = true;
    while(valor){
        valor2 = prompt(`Por favor ingrese el segundo dato:\n`);
        verificar(valor2);  
    }
    valor = true;
    suma(valor1, valor2);
}

//funcion verificacion
function verificar(val){
    
    if (!isNaN(val) && val != ''){
        valor = false;
    }
    else if (isNaN (val)){
        alert(`Lo que ingresaste ${val}, no contiene solamente numeros.\nVuelve a intentarlo.`);
    }
    else{
        alert(`Uds esta introduciendo datos vacios, no haga eso!!!\n`);
    }
}

//funcion suma
function suma(val1, val2){
    ente1 = parseInt(val1);
    ente2 = parseInt(val2);

    resultado = ente1 + ente2;

    alert(`El resultado de la suma de ${ente1} más ${ente2} es ${resultado}`);
}