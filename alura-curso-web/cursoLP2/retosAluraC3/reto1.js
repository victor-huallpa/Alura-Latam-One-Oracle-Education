/*
Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros 
y peso en kilogramos, que se recibirán como parámetros.
*/
let array= [];
let date;
let e = 0;
let ID;
let mensaje;

//fucion entrada de dates
function saludar(){
    console.log(date);
    date = document.getElementById('textoU').value;
    ID = document.getElementById('textoU').id;
    entry(date);
    Delete(ID);
}
//funcion validar entry data is nambered
function entry(date1){
    if (!isNaN(date1) && date1 != ''){
            save(date1);
    }
    else if(isNaN(date1)){
        mensaje =`Lo que ingresaste ${date1}, no solo contine numeros\nVuelve a intentarlo.`;
        show(mensaje);
    }
    else {
        mensaje = `Lo que ingresas no contiene nungun dato\nsugiero que ingreses datos.!!!`;
        show(mensaje);
    }
}
// funciton save data
function save(dat){
    dat = parseInt(dat);
    array.push(dat);
    console.log(array)
    if (array.length == 2){
        IMC(array);
        array = [];
    }
    else if (array.length == 1){
        show('');
    }
}

//the function for operating IMC.
function IMC(date2){
    let resultado;
    resultado = parseFloat(date2)/(parseFloat(date))**2;
    if (resultado >= 18.5 && resultado <= 24.9){
        mensaje = `Tú IMC es ${resultado}, loque indica que estas en buenas condiciones con tu peso.\nSigue hací.`;
        show(mensaje);
    }
    else if(resultado < 18.5 ){
        mensaje = `Tú IMC es ${resultado}, Por favor consulte a a un especialista en nutricion ya que te\nte encuentras debajo de los estanderes de IMC bajo de peso,`;
        show(mensaje);
    }
    else if ( resultado >= 25.00 || resultado < 29.9){
        mensaje = `tu IMC es ${resultado}, y estas considerado con sobrepeso, recomendamos\nque acudas a tu nutricionista.`;
        show(mensaje);
    }
    else{
        mensaje = `Tú IMC es ${resultado}, y estas considerado con Obecidad\nDeja de tragar mucha comida chatarra!!!!`;
        show(mensaje);
    }
}

//function show message
function show(message){
    if( array.length == 1){
        let myh2 = document.getElementById('mess');
        myh2 .innerText = 'Ingrese su estatura '
    }
    let myh3 = document.getElementById('nombU');
    myh3.innerText = message;
}

//function delete for the date.
function Delete(Id){
    document.getElementById(Id).value = '';
    // if (array,length == 2){
    //     array = [];
    // }
}