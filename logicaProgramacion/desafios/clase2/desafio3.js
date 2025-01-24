//varaible
let puntuacion = prompt('ingrese la puntuacion obtenida: ');

//condicional
if(puntuacion >= 100){
    alert(`La puntuacion de ${puntuacion} te da la victoria absoluta`);//tempate o permutacion su usa enves de concatenacion
}
else if (puntuacion < 100){
    alert(`La puntuacion de ${puntuacion} no es suficiente para la victoria sigue intentando`);
}else{
    alert(`Lo que ingresaste ${puntuacion} no es un numero`);
}
