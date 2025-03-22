/*Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos. */

//variables
let dato;
let id;
let array = [];

//funcion pedir datos
function saludar(){
    dato = document.getElementById('textoU').value;
    id = document.getElementById('textoU').id;
    validar(dato);
    console.log(array);
    Delete(id, array);

}

//funcion validar dato
function validar(dato1){
    if (!isNaN(dato1) && dato1 != ''){
        guardar(dato1);
    }
    else if(isNaN(dato1)){
        alert(`Lo que ingresaste ${dato}, no solo contiene numeros\nVuelve a intentarlo.`);
    }
    else{
        alert(`estas introduciendo contenido en blanco, porfavor no has eso!!!`);
    }

}

//funcion guardar
function guardar(dato2){
    dato = parseInt(dato2);
    array.push(dato2);
    if(array.length == 2){
        mayor(array);
    }
}

//funcion evaluar mayor
function mayor(list){
    let max = list[0] < list[1]? list[1]: list[0];
    show(max, list);
}

//funcion mostrar
function show(max1, listas){
    let myh3 = document.getElementById('nombU');
    let mensaje = `El mayor numero de ${listas[0]} y ${listas[1]} es: `
    myh3.innerText = `${mensaje}${max1}`;
    alert(`Si desea seguir comparando numeros, vuelva a ingresar dos valores.`)

}

//funcion limpiar
function Delete(iD, lista){
    document.getElementById(iD).value = "";
    if(lista.length == 2){
        array = [];
    }
    else{
        alert(`Escribe ${lista.length} numer${lista.length == 1? 'o': 'os'} más`);   
    }
}