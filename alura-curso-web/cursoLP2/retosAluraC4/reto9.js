/*
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
o-1 si no existe en la lista.
*/

//varibles
let array = [45, 5, 7, 0, 4];
let date;
let message;
//function entry data
function saludar(){
    date = document.getElementById('textoU').value;
    validate(date);
    clean();
}

function validate(date1){
    if(!isNaN(date1) & date1 != ''){
        operation(date1);
    }
    else if ( isNaN(date1)){
        message = `Lo que ingresaste ${date1}, no solo contiene numeros`;
        show(message);
    }
    else {
        message = `Estas ingresasndo datos vacios no hagas eso!!!`;
        show(message);
    }
}

function operation(date2){
    for (var i = 0; i <= array.length; i++){
        if(date2 == array[i]){
            message = `el numero ${date2} esta en el indice ${i}:`;
            show(message);
            break;
        }    else {
            message = `El numero que ingresaste ${date2} no se encuentra en el array`;
            show(message);
        }
    }
    // if(array.includes(date2)){
    //     message = `el numero ${date2} esta en el indice :`;
    //     show(message);
    // }

}

function show(date3){
    let myh3 = document.getElementById('nombU');
    
    myh3.innerText = date3;
}

function clean(){
    document.getElementById('textoU').value = '';
}