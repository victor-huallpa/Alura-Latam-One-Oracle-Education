
//Crea una lista vacía llamada "listaGenerica".
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
//Crea una fuención que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
// Crea una función que calcule el promedio de los elementos en una lista de números.
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// Crea una función que devuelva la suma de todos los elementos en una lista.
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
function mostrarLista(lista){
    //forma uno con forEach recorre elementos
    lista.forEach(element => {
        console.log(element);
    });
    //forma dos con for recorre elementos de acuerdo a la longitud de la lista y la variable i
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    }
}

function mostrarListaInversa(lista){
    //forma uno con forEach recorre elementos
    lista.reverse().forEach(element => {
        console.log(element);
    })

    //forma dos con for recorre elementos de acuerdo a la longitud de la lista y la variable i
    for(let i = lista.length - 1; i >= 0; i--){
        console.log(lista[i]);
    }
}

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];
let listaNumeros2 = [10,9,8,7,6,5,4,3,2,1];

function promedio(lista){
    let suma = 0;
    lista.forEach(element => {
        suma += element;
    })
    console.log(suma/lista.length);
}

function mayorMenor(lista){
    let mayor = lista[0];
    let menos = lista[0];
    lista.forEach(element => {
        if(element > mayor){
            mayor = element;
        }
        if(element < menos){
            menos = element;
        }
    })

    console.log(`El numero mayor es ${mayor} y el menor es ${menos}`);
}

function sumaElementos(lista){
    let suma = 0;
    lista.forEach(element => {
        suma += element;
    })
    console.log(suma);
}

function posicionElemento(lista, elemento){
    let posicion = lista.indexOf(elemento);
    console.log(posicion);
}

function sumaListas(lista1, lista2){
    let listaSuma = [];
    if(lista1.length !== lista2.length){
        console.log('Las listas no tienen la misma cantidad de elementos');
        return;
    }
    for(let i = 0; i < lista1.length; i++){
        listaSuma.push(lista1[i] + lista2[i]);
    }
    console.log(listaSuma);
}

function cuadradoNumeros(lista){
    let listaCuadrados = [];
    lista.forEach(element => {
        listaCuadrados.push(element * element);
    })
    console.log(listaCuadrados);
}

mostrarLista(lenguajesDeProgramacion);
mostrarListaInversa(lenguajesDeProgramacion);
promedio(listaNumeros);
mayorMenor(listaNumeros);
sumaElementos(listaNumeros);
posicionElemento(listaNumeros, 5);
sumaListas(listaNumeros, listaNumeros2);
cuadradoNumeros(listaNumeros);