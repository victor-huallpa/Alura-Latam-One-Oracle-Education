/*
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
*/

//varubles para el saludo.

let saludo = 'Bienvenido ';
let usuario = prompt('ingresse su nombre por favor: \n');

console.log(saludo + usuario);


//loop
 while (true){
    if (usuario == ''){
        alert('no ingreso su nombre.\nVuelva a intentarlo');
    }
    else if(usuario != ''){
        alert(`${saludo} ${usuario}`);
        let preg = confirm(`Desea seguir en la pagina?`);
        
        if(preg){
            alert('Ok!, navegacon cuidado.');
        }
        else{
            alert(`Nos vemos en una proxima, cuidate.`);
            break;
        }
    }
    else {
        alert(`Algo salio mal`)
    }
 }