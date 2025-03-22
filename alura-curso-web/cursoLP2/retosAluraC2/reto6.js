/*Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por 
sí mismo. */

//variables
let dato;
let ID;
let array = [];
let multiplicador = 0;
let valor12 = 0;
//funcion recibir datos
function saludar(){
    dato = document.getElementById('textoU').value;
    ID = document.getElementById('textoU').id;
    array.push(dato)
    Verify(array);
    Delete(ID, array);
}

//funcion verify
function Verify(date){
    if (!isNaN(date) && date != ''){
        if (Array.isArray(date)){
            keep(date);
        }
        else if(!Array.isArray(date)){
            valor12++            
        }
        else{
            alert(`algo salio mal`)
        }
    }
    else if(isNaN(date)){
        alert(`Lo que ingresaste ${date}, no solo contiene numeros\nVuelva a intentarlo:`);
    }
    else(
        alert(`Lo que estas ingresasdo no contiene ningun dato\mVuelve a intentarlo.`)
    )
}

//funcion operation
function operation(arrays){
    while(valor12 == 0){
        multiplicador = prompt(`Por cuanto quiere multiplicar el valor ${array[0]}?`);
        Verify(multiplicador);
    }
    valor12--
    multiplicador = parseInt(multiplicador);
    arrays = arrays * multiplicador;
    show(arrays, multiplicador);
}

//funcion keep
function keep(dates){
    dates = parseInt(dates);
    // array.push(dates)
    if (array.length === 1){
        operation(array);
    }else{
        alert(`El array contiene ${array.length} elementos`);
    }
}

//funcion show
function show(mostrar, multi){
    let myh3 = document.getElementById('nombU');
    let mesnaje = `El resultado de multiplicar ${array[0]} por ${multi} es:\n${mostrar}`;
    myh3.innerText = mesnaje;
}
//funcion delete
function Delete(id, datos){
    document.getElementById(id).value = "";
    if( datos.length == 1){
        array = [];
    }
}