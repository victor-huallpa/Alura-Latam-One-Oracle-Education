/*
Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad 
de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en 
{ciudad} y me acordé de ti".
*/

//funcion pregunta

function promptU(){
    let pregunta = prompt(`Digame una ciudad de Brazil:\n`);
    alert(`Estuve en la ciudad de ${pregunta} y me acorde de ti!!`);
}