/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/

//variables
let data;
let mensaje;
let h2 = document.getElementById('mess');
h2.innerText = 'ingrese un numero:   '
//function entry.
function saludar(){
    data = document.getElementById('textoU').value;
    validateD(data);
    clean()
}

//funciton validate
function validateD(data1){
    if (!isNaN(data1) && data1 != ''){
        operation(data1);
    }
    else if (isNaN(data1)){
        mensaje = `lo que ingresaste ${data1},\nno solo contiene numeros\nVuelve a intentarlo.`;
        show(mensaje)
    }
    else {
        mensaje = `Estas ingresando la caja en vacio,\nVuelve a intentarlo!!.`;
        show(mensaje)
    }
}

//funciton operation.
function operation(data2){
    data2 = parseInt(data2);
    var resultado = 1;
    for(var i = data2 ; i > 0; i--){
        resultado *= i;
    }
    mensaje = `El factoiral de ${data2} es: ${resultado}`;
    show(mensaje);
}

//function clean box
function clean(){
    document.getElementById('textoU').value = '';
}

//function show data
function show(res){
    let myh3 = document.getElementById('nombU');

    myh3.innerText = res;
}