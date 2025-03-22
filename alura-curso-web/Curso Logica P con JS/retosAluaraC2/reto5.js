/* 
Pide al usuario que ingrese su nombre mediante un prompt.
 Luego, muestra una alerta de bienvenida usando ese nombre.
*/

//crearemos variables para realizar el conteo de intentos de login en la pagina. sera maximo de 3intentos
let intento = 0;
let intentoM = 3;

//creamos un while para poder raelizar el login
while(intento < intentoM){

    alert(`Loguin de VECH`)
    //creamos lavariable donde contiene el nombre de usuario.
    let nomU = 'victor';

    //creamos la variable para poder realizar el login simple
    let usu = prompt(`Ingrese el nombre de su usuario por favor:\n`);

    //evaluamos si el usuario ingresso correctamente el nombre de usuario.

    if (usu == nomU){
        alert(`Bienvenido ${usu} a la pagina en desarrollo de Vech.`);
        //creamos una pregunta dentro de una variable para ver si desesa cerrar sesion
        let pregun = confirm(`Desea cerrar sesion?, \nCaso contrario tiene que logearse de nuevo,`);
        //evaluamos la consulta.
        if(pregun){
            alert(`Perfecto ${usu}, dentro de un rato nos vemos de nueno entonces.`)
        }
        else{
            alert(`Woow!, entiendo ${usu}, asta la proxima en todo caso.`);
            break;
   }
    }
    else if(usu != nomU){
        alert(`El usuario que ingresaste es incorrecto.\nVuelve a intentarlo`);
        intento++;
    }
}
if (intento == 3){
    alert(`Lo lamento agotaste los ${intentoM} intentos permitidos para el login en la pagina de VECH.`)
}
else(
    alert(`esto es una prueva XD`)
)