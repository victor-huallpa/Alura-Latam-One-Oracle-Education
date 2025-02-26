// Crear una función que muestre ¡Hola, mundo! en la consola.
// Crear una función que reciba un nombre como parámetro y muestre ¡Hola, [nombre]! en la consola.
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
// Crear una función que reciba tres números como parámetros y devuelva su promedio.
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
// Array para almacenar los resultados
let resultados = [];

// Funciones
function saludar() {
    return 'Hola Mundo!';
}

function saludo(nombre) {
    return `Hola ${nombre}`;
}

function doble(numero) {
    return numero * 2;
}

function numero(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function numMayor(num1, num2) {
    return num1 < num2 ? `El número ${num2} es mayor` : `El número ${num1} es mayor`;
}

function multiplicador(numero) {
    return numero * numero;
}

// Almacenar los resultados en el array
resultados[0] = saludar();
resultados[1] = saludo('Jorge');
resultados[2] = doble(4);
resultados[3] = numero(5, 8, 4);
resultados[4] = numMayor(7, 9);
resultados[5] = multiplicador(12);

// Función para mostrar los resultados en los elementos HTML
function show(mensaje, id) {
    let parrafo = document.getElementById(id);
    if (parrafo) {
        parrafo.innerHTML = mensaje;
    } else {
        console.error(`Elemento con ID ${id} no encontrado.`);
    }
}

// Mostrar los resultados usando un bucle for
for (let i = 0; i < resultados.length; i++) {
    show(resultados[i], `num${i + 1}`);
}