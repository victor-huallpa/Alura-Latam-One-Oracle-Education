/*Crear una función que reciba tres números como parámetros y devuelva su promedio.*/
//variables
let dato;
let id;
let array = [];
let contador = 0;  
//funcion pedir datos
function saludar(){
    dato = document.getElementById('textoU').value;
    id = document.getElementById('textoU').id;
    verificar(dato);
    Delete(id);
}

//funcion verificar
function verificar(valor){
    if(!isNaN(valor) && valor != ''){
        guarCon(valor);
    }
    else if(isNaN(valor)){
        alert(`Lo que ingresaste ${valor}, no contiene solamente numeros,\nVuelve a intentarlo.`)
    }
    else{
        alert(`Oye!!!, estas tratando de enviar datos vacios\nNo hagas eso!!!`);
    }
}


//funcion promedio
function promedio(array, otro){
    var prom = 0;
    for(var i = 0;i < 3; i++ ){
        prom += array[i]
    }
    prom = prom/array.length;
    otro = parseInt(otro);
    console.log(otro / array.length);
    pregunta(prom);    
    mostrar(prom, array);    
}

//funciton mostrar
function mostrar(contenido, datos){
    let myh3 = document.getElementById('nombU');
    let mensaje = `El resultado del promedio de ${datos} es:`;
    myh3.innerText = `${mensaje} ${contenido}`;
    alert(`si quieres seguir promediando ingrese nuevamente 3 valores.`);
}

//funcion limpiar
function Delete(id){
    document.getElementById(id).value = "";
    if(array.length === 3){
        array = [];
    }
}

//funcion convertir y guardar
function guarCon(valor){
    valor = parseInt(valor);
    contador += valor;
    array.push(valor);
    if ( array.length == 3){
        promedio(array, contador);
    }else if(array.length == 2){
        alert(`Ingrese un numero mas para poder promediar`)
    }
    else if( array.length == 1){
        alert(`Ingrese 2 valores mas para poder promediar`)
    }
    else{
        alert(`Algo salio mal`)
    }
}

//funcion pregunta decimal o no
function pregunta(prome){
    let intF = confirm(`El resultado lo quiere en Decimales?\nAceptar = Si\nCancelar = no`)
    if(intF){
        prome = parseInt(prome);
        return prome;
    }
    else{
        return;   
    }
}