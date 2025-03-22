/*
Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
*/
//variable.
let ranEntero;
let nRandom ;
let nDigitos;
let multiplicador;
let inicioR;
let entero;
let comprovar = true;

//amplitud del decimal
let min;
let max;
//for para generar 5 numero random.

for(var i = 1;i <= 3; i++){
    //numero de enteros
    nDigitos = prompt(`De cauntos digitos enteros quiere el numero random?\nSolo se puede de 0 a 4 digitos enteros`)
    validar(nDigitos);
    if (nDigitos == 0 && nDigitos != ''){
        multiplicador = 1;
        comprovar = true;
        numeroR(multiplicador);
    }
    else if (nDigitos == 1){
        multiplicador = 10;
        comprovar = true;
        numeroR(multiplicador);
    }
    else if (nDigitos == 2){
        multiplicador = 100;
        comprovar = true;
        numeroR(multiplicador);
    }
    else if (nDigitos == 3){
        multiplicador = 1000;
        comprovar = true;
        numeroR(multiplicador);
    }
    else if (nDigitos == 4){
        multiplicador = 10000;
        comprovar = true;
        numeroR(multiplicador);
    }
    else if (nDigitos < 0 || nDigitos > 4 ){
        alert(`la cantidad de digitos ${nDigitos} que introdujo no esta en el rango establecido!!!`);
        i--
        comprovar = true;
    }else{
        i--
    }
}

//funcion cunsulta de inicio de numero random.
function numeroR (mul){
    while (comprovar){
        inicioR = prompt(`Desde que numero quiere iniciar\ntenga en cuanta el numero de digitos enteros`);
        validar(inicioR);
        entero = parseInt(inicioR)
    }
    comprovar = true;
    consulta(mul, entero)    

}
//validar el tipo de dato.

function validar(valor){
    if(!isNaN(valor) && valor != ''){
        return comprovar = false;
    }
    else if (isNaN(valor)){
        alert(`Lo que introduciste ${valor}, no esta permitido`);
    }
    else{
        alert(`Estas introduciendo valores vacios y eso me enoja....`);
    }
}
//consulta de tipo de numero random
function consulta (mul, entero){
    let con = confirm(`¿Desea generar los numeros random con decimales?`);
    if (con){
        flotaR(mul, entero);
    }
    else{
        enteroR(mul, entero);
    }
}

//funcion de numeros random flotantes
function flotaR (mul, entero){
    for( var e = 1; e <= 5; e++){
        nRandom = Math.random()*((mul+1) - entero ) + entero
        console.log(`El nuemro generado es ${nRandom} ${e == 1? 'uno': `${e}`}`);
    }
}

//funcion dato numero random entero

function enteroR(mul, entero){
    for( var m = 1 ; m <= 5; m++){
        ranEntero = Math.floor( Math.random() * ((mul+1) - entero) ) +entero;
        console.log(`El nuemro generado es ${ranEntero} ${m == 1? 'uno': `${m}`}`);
    }
}