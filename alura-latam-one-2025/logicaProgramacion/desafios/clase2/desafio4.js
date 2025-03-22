//varaible
let pregunta = prompt('Quiere ver su saldo a ctual?: ');
let saldo = 500;
//condicional
if(pregunta == 'si'){
    alert(`su saldo actual es de ${saldo} `);//tempate o permutacion su usa enves de concatenacion
}
else if (pregunta == 'no'){
    alert(`Gracias vuelva pronto`);
}else{
    alert(`Lo que ingresaste ${pregunta} no tiene sentido`);
}
