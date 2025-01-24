//varaibles
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

//mostrar por pantalla
console.log(numeroUsuario);


//validar con la condiiconal if
if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroSecreto}`);
}else{
    alert('Lo siento no acertaste con el numero');
}
