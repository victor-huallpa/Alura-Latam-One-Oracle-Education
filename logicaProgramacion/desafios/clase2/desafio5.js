//varaible
let pregunta = prompt('Por favor ingrese su usuario: ');
let usuario = 'javi';
//condicional
if(pregunta == usuario){
    alert(`bien vendio ${usuario} `);//tempate o permutacion su usa enves de concatenacion
}
else{
    alert(`Usuario ingresado ${pregunta} es incorrecto vuelva a intentarlo`);
}
