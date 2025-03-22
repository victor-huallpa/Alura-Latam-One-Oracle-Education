var entrada = "abc123$%^";

// Evaluación de caracteres especiales
var caracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
if (caracteresEspeciales.test(entrada)) {
    console.log("La cadena contiene caracteres especiales");
} else {
    console.log("La cadena no contiene caracteres especiales");
}

// Evaluación de números
var numeros = /\d/;
if (numeros.test(entrada)) {
    console.log("La cadena contiene números");
} else {
    console.log("La cadena no contiene números");
}

// Evaluación de texto
var texto = /^[a-zA-Z]+$/;
if (texto.test(entrada)) {
    console.log("La cadena contiene solo texto");
} else {
    console.log("La cadena no contiene solo texto");
}